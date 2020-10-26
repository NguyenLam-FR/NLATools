import { __decorate } from "tslib";
import { Component } from '@angular/core';
let AppareilViewComponent = /** @class */ (() => {
    let AppareilViewComponent = class AppareilViewComponent {
        constructor(appareilService) {
            this.appareilService = appareilService;
            this.title = 'angularPremier mon premier programme angular what';
            this.isAuth = false;
            this.lastUpdate = new Promise((resolve, reject) => {
                const date = new Date();
                setTimeout(() => {
                    resolve(date);
                }, 2000);
            });
            setTimeout(() => {
                this.isAuth = true;
            }, 4000);
        }
        ngOnInit() {
            this.appareilSubscription = this.appareilService.appareilSubject.subscribe((appareils) => {
                this.appareils = appareils;
            });
            this.appareilService.emitAppareilSubject();
        }
        onAllumer() {
            this.appareilService.switchOnAll();
        }
        onEteindre() {
            if (confirm('Etes-vous sûr de vouloir éteindre tous vos appareils ?')) {
                this.appareilService.switchOffAll();
            }
            else {
                return null;
            }
        }
        onSave() {
            this.appareilService.saveAppareilsToServer();
        }
        onFetch() {
            //    this.appareilService.getAppareilsFromServer();
            this.appareilService.autreExemple();
        }
    };
    AppareilViewComponent = __decorate([
        Component({
            selector: 'app-appareil-view',
            templateUrl: './appareil-view.component.html',
            styleUrls: ['./appareil-view.component.scss']
        })
    ], AppareilViewComponent);
    return AppareilViewComponent;
})();
export { AppareilViewComponent };
//# sourceMappingURL=appareil-view.component.js.map