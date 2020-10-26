import { Subject } from 'rxjs/Subject';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { VariablesGlobales } from './variables.globales';


@Injectable()
export class RefPonderationCCService{

  refPonderationSubject = new Subject<any[]>();

  private refPonderation: any[];

  constructor(private httpClient: HttpClient, private variablesGlobales: VariablesGlobales) { }

  emitRefPonderationSubject(){
    this.refPonderationSubject.next(this.refPonderation.slice());
  }

  getRefPonderationCC(){
    this.httpClient.get<any[]>(this.variablesGlobales.URL_MICRO_SERVICE + '/refPonderationCC')
    .subscribe(
      (response) => {
        console.log(response);
        this.refPonderation = response;
        this.emitRefPonderationSubject();
    },(err: HttpErrorResponse) => {
        console.log(err.error);
        console.log(err.name);
        console.log(err.message);
        console.log(err.status);
    });
    console.log('GET getRefPonderationCC fin ! : ');
  }


}