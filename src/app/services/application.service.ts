import { Subject } from 'rxjs/Subject';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { VariablesGlobales } from './variables.globales';

@Injectable()
export class ApplicationService{ 

  applicationMenuSubject = new Subject<any>();
  applicationSubject = new Subject<any[]>();
  snapshotSubject = new Subject<any[]>();
  statAppByYearSubject = new Subject<any[]>();
  oneApplicationSubject = new Subject<any>();
  appsByTechnoSubject = new Subject<any>();
  nbAppByVersionAIPSubject = new Subject<any>();
  extensionByAppSubject = new Subject<any[]>();
  statApplicationsByYearEtat3Subject = new Subject<any[]>();

  private applications: any[];
  private appByYear: any[];
  private application: any;
  private applicationMenu: any;
  private snapshots: any[];
  private appsByTechno: any[];
  private nbAppByVersionAIP: any[];
  private extensionByApp: any[];
  private statApplicationsByYearEtat3: any[];

  constructor(private httpClient: HttpClient, private variablesGlobales: VariablesGlobales) { }

  emitStatApplicationsByYearEtat3Subject(){
    this.statApplicationsByYearEtat3Subject.next(this.statApplicationsByYearEtat3.slice());
  }

  emitExtensionsByAppSubject(){
    this.extensionByAppSubject.next(this.extensionByApp.slice());
  }

  emitNbAppByVersionAIPSubject(){
    this.nbAppByVersionAIPSubject.next(this.nbAppByVersionAIP.slice());
  }

  emitAppsByTechnoSubject(){
    this.appsByTechnoSubject.next(this.appsByTechno.slice());
  }

  emitApplicationSubject(){
    this.applicationSubject.next(this.applications.slice());
  }

  emitAppByYearSubject(){
    this.statAppByYearSubject.next(this.appByYear.slice());
  }

  emitOneApplicationSubject(){
    this.oneApplicationSubject.next(this.application);
  }

  emitApplicationMenuSubject(){
   // console.log('application.service.emitApplicationMenuSubject this.applicationMenu='+this.applicationMenu);
    this.applicationMenuSubject.next(this.applicationMenu);
  }

  emitSnapshotSubject(){
    this.snapshotSubject.next(this.snapshots.slice());
  }

  getApplications(){
    return this.applications;
  }

  getApplication(id: number){
    const application = this.applications.find(
     (applicationObject) =>{
       return applicationObject.id === id;
     } );
    return application;
  }

  setApplicationMenu(applicationMenu: any){
    console.log('application.service.setApplicationMenu');
    if( applicationMenu == null){
      this.applicationMenu = null;
    } else {
      this.applicationMenu = applicationMenu;
    }
    this.emitApplicationMenuSubject();
  }

  getApplicationMenu(){
  //  console.log('application.service.getApplicationMenu');
    return this.applicationMenu;
  }

  getStatApplicationsByYearEtat3(){
    this.httpClient.get<any[]>(this.variablesGlobales.URL_MICRO_SERVICE + '/StatApplicationsByYearEtat3')
    .subscribe(
      (response) => {
        this.statApplicationsByYearEtat3 = response;
        console.log('getStatApplicationsByYearEtat3 apres catch response');
        this.emitStatApplicationsByYearEtat3Subject();
    },(err: HttpErrorResponse) => {
        console.log(err.error);
        console.log(err.name);
        console.log(err.message);
        console.log(err.status);
    });
    console.log('getStatApplicationsByYearEtat3 fin');
  }

  getExtensionByApp(idApp){
    this.httpClient.get<any[]>(this.variablesGlobales.URL_MICRO_SERVICE + '/ExtensionsByApp/'+idApp)
    .subscribe(
      (response) => {
        this.extensionByApp = response;
        console.log('getExtensionByApp apres catch response');
        this.emitExtensionsByAppSubject();
    },(err: HttpErrorResponse) => {
        console.log(err.error);
        console.log(err.name);
        console.log(err.message);
        console.log(err.status);
    });
    console.log('getExtensionByApp fin');
  }

  getNbAppByVersionAIP(){
    this.httpClient.get<any>(this.variablesGlobales.URL_MICRO_SERVICE + '/AIPVersions')
    .subscribe(
      (response) => {
        this.nbAppByVersionAIP = response;
        console.log('getNbAppByVersionAIP apres catch response');
        this.emitNbAppByVersionAIPSubject();
    },(err: HttpErrorResponse) => {
        console.log(err.error);
        console.log(err.name);
        console.log(err.message);
        console.log(err.status);
    });
    console.log('getNbAppByVersionAIP fin');
  }

  getStatAppByYearREST(nbMonth: number){
    this.httpClient.get<any>(this.variablesGlobales.URL_MICRO_SERVICE + '/StatsAppByYear/'+nbMonth)
    .subscribe(
      (response) => {
        this.appByYear = response;
        console.log('getStatAppByYearREST apres catch response');
        this.emitAppByYearSubject();
    },(err: HttpErrorResponse) => {
        console.log(err.error);
        console.log(err.name);
        console.log(err.message);
        console.log(err.status);
    });
    console.log('getStatAppByYearREST fin');
  }

  getApplicationByIdREST(id: number){
    this.variablesGlobales.URL_MICRO_SERVICE;
    console.log("this.variablesGlobales.URL_MICRO_SERVICE="+this.variablesGlobales.URL_MICRO_SERVICE);

    this.httpClient.get<any>(this.variablesGlobales.URL_MICRO_SERVICE + '/ApplicationDetail/'+id)
    .subscribe(
      (response) => {
        this.application = response;
        console.log('getApplicationByIdREST apres catch response');
        this.emitOneApplicationSubject();
    },(err: HttpErrorResponse) => {
        console.log(err.error);
        console.log(err.name);
        console.log(err.message);
        console.log(err.status);
    });
    console.log('getApplicationByIdREST fin');
  }

  getApplicationsSnapshotREST(){
    this.httpClient.get<any[]>(this.variablesGlobales.URL_MICRO_SERVICE + '/ApplicationsSnapshot')
    .subscribe( 
      (response) => {
        console.log(response);
        this.applications = response;
        this.emitApplicationSubject();
    },(err: HttpErrorResponse) => {
        console.log(err.error);
        console.log(err.name);
        console.log(err.message);
        console.log(err.status);
    });
    console.log('GET getApplicationREST fin ! : ');
  }

  getSnapshotsREST(id: number, idOutil: number){
    this.httpClient.get<any[]>(this.variablesGlobales.URL_MICRO_SERVICE + '/SnapshotByAppAndOutil/'+id+'/'+idOutil)
    .subscribe(
      (response) => {
        console.log(response);
        this.snapshots = response;
        this.emitSnapshotSubject();
    },(err: HttpErrorResponse) => {
        console.log(err.error);
        console.log(err.name);
        console.log(err.message);
        console.log(err.status);
    });
    console.log('GET getSnapshotsREST fin ! : ');
  }

  getAppsByTechno(){
    this.httpClient.get<any[]>(this.variablesGlobales.URL_MICRO_SERVICE + '/ApplicationByTechno')
    .subscribe(
      (response) => {
        console.log(response);
        this.appsByTechno = response;
        this.emitAppsByTechnoSubject();
    },(err: HttpErrorResponse) => {
        console.log(err.error);
        console.log(err.name);
        console.log(err.message);
        console.log(err.status);
    });
    console.log('GET getAppsByTechno fin ! : ');
  }
}