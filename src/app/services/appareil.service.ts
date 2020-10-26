import { Subject } from 'rxjs/Subject';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppareilComponent } from '../appareil/appareil.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';


@Injectable()
export class AppareilService{

  appareilSubject = new Subject<any[]>();

  private appareils = [
  {
    id: 1,
	name: 'Machine à laver',
	status: 'éteint'
  },
  {
    id: 2,

	name: 'Télévision',
	status: 'allumé'
  },
  {
    id: 3,

	name: 'Ordinateur',
	status: 'éteint'
  }
  ];

  constructor(private httpClient: HttpClient) { }

  emitAppareilSubject(){
    this.appareilSubject.next(this.appareils.slice());
  }

  getAppareilId(id: number){
    const appareil = this.appareils.find(
     (appareilObject) =>{
       return appareilObject.id === id;
     } );
    return appareil;
  }

  switchOnAll(){
  	for(let appareil of this.appareils){
  		appareil.status = 'allumé';
  	}
    this.emitAppareilSubject();
  }

  switchOffAll(){
  	for(let appareil of this.appareils){
  		appareil.status = 'éteint';
  	}
    this.emitAppareilSubject();

  }

  switchOnOne(index: number){
  	this.appareils[index].status = 'allumé';
    this.emitAppareilSubject();

  }

 switchOffOne(index: number){
  	this.appareils[index].status = 'éteint';
    this.emitAppareilSubject();

  }

  addAppareil(name: string, status: string){
    const appareilObject = {
      id: 0,
      name: '',
      status: ''
    };
    appareilObject.name = name;
    appareilObject.status = status;
    appareilObject.id = this.appareils[(this.appareils.length - 1)].id + 1;

    this.appareils.push(appareilObject);

    this.emitAppareilSubject();
  }

  saveAppareilsToServer() {
    this.httpClient
      .put('https://microcommerce-nguyen.firebaseio.com/appareils.json', this.appareils)
      .subscribe(
        () => {
          console.log('Enregistrement terminé !');
        },
        (error) => {
          console.log('Erreur  dans le saveAppareilsToServer : ' + error);
        }
      );
}


getAppareilsFromServer() {
    this.httpClient
      .get<any[]>('https://microcommerce-nguyen.firebaseio.com/appareils.json')
      .subscribe(
        (response) => {
          this.appareils = response;
          this.emitAppareilSubject();
          console.log('getAppareilsFromServer !');

        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );
}


getAppareilsFromServer2() {
    this.httpClient
      .get<any[]>('http://localhost:9090/Produits/1')
      .subscribe(
        (response) => {
          //response;
          console.log('Lecture Produits OK ');
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );
  }



  readAPI() {
    this.httpClient.get<any[]>('http://localhost:9090/Produits/1')
    .subscribe((data) => {
      console.log(data);
    });
  }

autreExemple(){
      this.httpClient.get<any[]>('http://localhost:9090/Applications')
//      this.httpClient.put('https://microcommerce-nguyen.firebaseio.com/appareils.json', this.appareils)

      .subscribe(
        (response) => {
          console.log(response);
      },(err: HttpErrorResponse) => {
          console.log(err.error);
          console.log(err.name);
          console.log(err.message);
          console.log(err.status);
      });
          console.log('GET autreExemple fin ! : ');

  }
  //Promise<AppareilComponent[]> articles = 
/*  this.httpClient.get<any[]>('http://localhost:9090/Applications').subscribe(
        (response) => {
          //this.appareils = response;
          //this.emitAppareilSubject();
          console.log('GET OK RESPONSE ! : ');

        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );
  console.log("GET autreExemple FIN");
}*/

}