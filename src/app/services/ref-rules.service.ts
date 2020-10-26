import { Subject } from 'rxjs/Subject';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { VariablesGlobales } from './variables.globales';


@Injectable()
export class RefRulesService{

  ruleDetailSubject = new Subject<any[]>();
  ruleSubject = new Subject<any[]>();
  rulePerToolSubject = new Subject<any[]>();

  private rulesDetailAgg: any[];
  private rulesAgg: any[];
  private rulesPerTool: any[];

  constructor(private httpClient: HttpClient, private variablesGlobales: VariablesGlobales) { }

  emitRulesPerToolSubject(){
    this.rulePerToolSubject.next(this.rulesPerTool.slice());
  }

  emitRulesDetailSubject(){
    this.ruleDetailSubject.next(this.rulesDetailAgg.slice());
  }

  emitRulesSubject(){
    this.ruleSubject.next(this.rulesAgg.slice());
  }

  getRulesPerToolAgg(){
    this.httpClient.get<any[]>(this.variablesGlobales.URL_MICRO_SERVICE + '/nbRulesUsedByTool')
    .subscribe(
      (response) => {
        console.log(response);
        this.rulesPerTool = response;
        this.emitRulesPerToolSubject();
    },(err: HttpErrorResponse) => {
        console.log(err.error);
        console.log(err.name);
        console.log(err.message);
        console.log(err.status);
    });
    console.log('GET getRulesPerToolAgg fin ! : ');
  }

  getRulesDetailAgg(){
    this.httpClient.get<any[]>(this.variablesGlobales.URL_MICRO_SERVICE + '/refRuleAgg')
    .subscribe(
      (response) => {
        console.log(response);
        this.rulesDetailAgg = response;
        this.emitRulesDetailSubject();
    },(err: HttpErrorResponse) => {
        console.log(err.error);
        console.log(err.name);
        console.log(err.message);
        console.log(err.status);
    });
    console.log('GET getRulesDetailAgg fin ! : ');
  }

  getRulesAgg(){
    this.httpClient.get<any[]>(this.variablesGlobales.URL_MICRO_SERVICE + '/refRulePAAgg')
    .subscribe(
      (response) => {
        console.log(response);
        this.rulesAgg = response;
        this.emitRulesSubject();
    },(err: HttpErrorResponse) => {
        console.log(err.error);
        console.log(err.name);
        console.log(err.message);
        console.log(err.status);
    });
    console.log('GET getRulesAgg fin ! : ');
  }

}