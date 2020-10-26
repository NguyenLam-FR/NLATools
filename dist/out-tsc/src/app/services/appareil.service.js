import { __decorate } from "tslib";
import { Subject } from 'rxjs/Subject';
import { Injectable } from '@angular/core';
let AppareilService = /** @class */ (() => {
    let AppareilService = class AppareilService {
        constructor(httpClient) {
            this.httpClient = httpClient;
            this.appareilSubject = new Subject();
            this.appareils = [
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
        }
        emitAppareilSubject() {
            this.appareilSubject.next(this.appareils.slice());
        }
        getAppareilId(id) {
            const appareil = this.appareils.find((appareilObject) => {
                return appareilObject.id === id;
            });
            return appareil;
        }
        switchOnAll() {
            for (let appareil of this.appareils) {
                appareil.status = 'allumé';
            }
            this.emitAppareilSubject();
        }
        switchOffAll() {
            for (let appareil of this.appareils) {
                appareil.status = 'éteint';
            }
            this.emitAppareilSubject();
        }
        switchOnOne(index) {
            this.appareils[index].status = 'allumé';
            this.emitAppareilSubject();
        }
        switchOffOne(index) {
            this.appareils[index].status = 'éteint';
            this.emitAppareilSubject();
        }
        addAppareil(name, status) {
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
                .subscribe(() => {
                console.log('Enregistrement terminé !');
            }, (error) => {
                console.log('Erreur  dans le saveAppareilsToServer : ' + error);
            });
        }
        getAppareilsFromServer() {
            this.httpClient
                .get('https://microcommerce-nguyen.firebaseio.com/appareils.json')
                .subscribe((response) => {
                this.appareils = response;
                this.emitAppareilSubject();
                console.log('getAppareilsFromServer !');
            }, (error) => {
                console.log('Erreur ! : ' + error);
            });
        }
        getAppareilsFromServer2() {
            this.httpClient
                .get('http://localhost:9090/Produits/1')
                .subscribe((response) => {
                //response;
                console.log('Lecture Produits OK ');
            }, (error) => {
                console.log('Erreur ! : ' + error);
            });
        }
        readAPI() {
            this.httpClient.get('http://localhost:9090/Produits/1')
                .subscribe((data) => {
                console.log(data);
            });
        }
        autreExemple() {
            this.httpClient.get('http://localhost:9090/Applications')
                //      this.httpClient.put('https://microcommerce-nguyen.firebaseio.com/appareils.json', this.appareils)
                .subscribe((response) => {
                console.log(response);
            }, (err) => {
                console.log(err.error);
                console.log(err.name);
                console.log(err.message);
                console.log(err.status);
            });
            console.log('GET autreExemple fin ! : ');
        }
    };
    AppareilService = __decorate([
        Injectable()
    ], AppareilService);
    return AppareilService;
})();
export { AppareilService };
//# sourceMappingURL=appareil.service.js.map