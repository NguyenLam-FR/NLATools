import { Subject } from 'rxjs/Subject';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { VariablesGlobales } from './variables.globales';


@Injectable()
export class ActionPlanService{

  actionPlanSubject = new Subject<any[]>();

  private actionPlanList: any[];

  constructor(private httpClient: HttpClient, private variablesGlobales: VariablesGlobales) { }

  emitActionPlanListSubject(){
    this.actionPlanSubject.next(this.actionPlanList.slice());
  }

  getActionPLanList(idApp: number,idSnapshot: number,apStatus: String){
    this.httpClient.get<any[]>(this.variablesGlobales.URL_MICRO_SERVICE + '/ActionPlanPerApp/'+idApp+'/'+idSnapshot+'/'+apStatus)
    .subscribe(
      (response) => {
        console.log(response);
        this.actionPlanList = response;
        this.emitActionPlanListSubject();
    },(err: HttpErrorResponse) => {
        console.log(err.error);
        console.log(err.name);
        console.log(err.message);
        console.log(err.status);
    });
    console.log('GET getActionPLanList fin ! : ');
  }


}