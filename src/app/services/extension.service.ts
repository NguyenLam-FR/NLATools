import { Subject } from 'rxjs/Subject';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { VariablesGlobales } from './variables.globales';


@Injectable()
export class ExtensionService{

  extensionSubject = new Subject<any[]>();
  extensionsListSubject = new Subject<any[]>();

  private extensions: any[];
  private extensionsList: any[];

  constructor(private httpClient: HttpClient, private variablesGlobales: VariablesGlobales) { }

  emitExtensionsSubject(){
    this.extensionSubject.next(this.extensions.slice());
  }

  emitExtensionsListSubject(){
    this.extensionsListSubject.next(this.extensionsList.slice());
  }

  getExtensions(){
    this.httpClient.get<any[]>(this.variablesGlobales.URL_MICRO_SERVICE + '/ExtensionsByApp')
    .subscribe(
      (response) => {
        console.log(response);
        this.extensions = response;
        this.emitExtensionsSubject();
    },(err: HttpErrorResponse) => {
        console.log(err.error);
        console.log(err.name);
        console.log(err.message);
        console.log(err.status);
    });
    console.log('GET getExtensions fin ! : ');
  }

  getExtensionsByIdApp(idApp){
    this.httpClient.get<any[]>(this.variablesGlobales.URL_MICRO_SERVICE + '/ExtensionsByApp/'+idApp)
    .subscribe(
      (response) => {
        console.log(response);
        this.extensionsList = response;
        this.emitExtensionsListSubject();
    },(err: HttpErrorResponse) => {
        console.log(err.error);
        console.log(err.name);
        console.log(err.message);
        console.log(err.status);
    });
    console.log('GET getExtensionsByIdApp fin ! : ');
  }

}