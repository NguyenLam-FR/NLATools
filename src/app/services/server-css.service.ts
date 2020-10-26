import { Subject } from 'rxjs/Subject';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { VariablesGlobales } from './variables.globales';


@Injectable()
export class ServerCssService{

  serverSubject = new Subject<any[]>();

  private servers: any[];

  constructor(private httpClient: HttpClient, private variablesGlobales: VariablesGlobales) { }

  emitServerCssSubject(){
    this.serverSubject.next(this.servers.slice());
  }

  getServerCss(){
    this.httpClient.get<any[]>(this.variablesGlobales.URL_MICRO_SERVICE + '/ServerCSS')
    .subscribe(
      (response) => {
        console.log(response);
        this.servers = response;
        this.emitServerCssSubject();
    },(err: HttpErrorResponse) => {
        console.log(err.error);
        console.log(err.name);
        console.log(err.message);
        console.log(err.status);
    });
    console.log('GET getServerCss fin ! : ');
  }


}