import { Subject } from 'rxjs/Subject';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { VariablesGlobales } from './variables.globales';


@Injectable()
export class ApplicationManService{

  applicationManSubject = new Subject<any[]>();

  private applications: any[];

  constructor(private httpClient: HttpClient, private variablesGlobales: VariablesGlobales) { }

  emitApplicationManSubject(){
    this.applicationManSubject.next(this.applications.slice());
  }

  getApplicationsMan(){
    this.httpClient.get<any[]>(this.variablesGlobales.URL_MICRO_SERVICE + '/ApplicationManuelle')
    .subscribe(
      (response) => {
        console.log(response);
        this.applications = response;
        this.emitApplicationManSubject();
    },(err: HttpErrorResponse) => {
        console.log(err.error);
        console.log(err.name);
        console.log(err.message);
        console.log(err.status);
    });
    console.log('GET getApplicationsMan fin ! : ');
  }


}