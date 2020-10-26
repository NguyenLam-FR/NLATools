import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
let AppComponent = /** @class */ (() => {
    let AppComponent = class AppComponent {
        constructor() { }
        ngOnInit() {
            const counter = Observable.interval(1000);
            this.counterSubscription = counter.subscribe((value) => {
                this.secondes = value;
            });
        }
        ngOnDestroy() {
            this.counterSubscription.unsubscribe();
        }
    };
    AppComponent = __decorate([
        Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.scss']
        })
    ], AppComponent);
    return AppComponent;
})();
export { AppComponent };
//# sourceMappingURL=app.component.js.map