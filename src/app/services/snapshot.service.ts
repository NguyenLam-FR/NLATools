import { Subject } from 'rxjs/Subject';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { VariablesGlobales } from './variables.globales';

@Injectable()
export class SnapshotService{

  oneSnapshotSubject = new Subject<any>();
  forDeleteSnapshotSubject = new Subject<any>();

  private snapshot: any;
  private snapshotForDelete: any;

  constructor(private httpClient: HttpClient, private variablesGlobales: VariablesGlobales) { }

  emitOneSnapshotSubject(){
    this.oneSnapshotSubject.next(this.snapshot);
  }
  emitForDeleteSnapshotSubject(){
    this.forDeleteSnapshotSubject.next(this.snapshotForDelete);
  }

  purgeCentralById(id_application: number){
    return this.httpClient.get<any>(this.variablesGlobales.URL_MICRO_SERVICE + '/purgeCentralBase/' +  id_application)
      .subscribe(
        (response) => {  
          this.snapshot = response;
          console.log('purgeCentralById apres catch response');
          this.emitOneSnapshotSubject();
      },(err: HttpErrorResponse) => {
          console.log(err.error);
          console.log(err.name);
          console.log(err.message);
          console.log(err.status);
      });
      console.log('purgeCentralById fin id_application='+id_application);
  }

  deleteCommentForSnapshot(snapshot: any){
    return this.httpClient.post<any>(this.variablesGlobales.URL_MICRO_SERVICE + '/saveCommentForSnapshot', snapshot)
      .subscribe(
        (response) => {
          this.snapshotForDelete = response;
          console.log('saveCommentForSnapshot apres catch response');
          this.emitForDeleteSnapshotSubject();
      },(err: HttpErrorResponse) => {
          console.log(err.error);
          console.log(err.name);
          console.log(err.message);
          console.log(err.status);
      });
      console.log('saveCommentForSnapshot fin');
  }
  /** POST: update comment for a snapshot to the database */
  saveCommentForSnapshot(snapshot: any){
    return this.httpClient.post<any>(this.variablesGlobales.URL_MICRO_SERVICE + '/saveCommentForSnapshot', snapshot)
      .subscribe(
        (response) => {
          this.snapshot = response;
          console.log('saveCommentForSnapshot apres catch response');
          this.emitOneSnapshotSubject();
      },(err: HttpErrorResponse) => {
          console.log(err.error);
          console.log(err.name);
          console.log(err.message);
          console.log(err.status);
      });
      console.log('saveCommentForSnapshot fin');
  }

  /** POST: Delete Forever a snapshot in the database, Be carreful, once it is done, no rollback possible ! */
  deleteForeverSnapshotById (id_snapshot: any){
    return this.httpClient.post<any>(this.variablesGlobales.URL_MICRO_SERVICE + '/deleteSnapshotForever', id_snapshot)
      .subscribe(
        (response) => {
          this.snapshot = response;
          console.log('deleteForeverSnapshotById apres catch response');
          this.emitOneSnapshotSubject();
      },(err: HttpErrorResponse) => {
          console.log(err.error);
          console.log(err.name);
          console.log(err.message);
          console.log(err.status);
      });
      console.log('deleteForeverSnapshotById fin');
  }

}