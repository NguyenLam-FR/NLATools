import { __decorate } from "tslib";
import { Component } from '@angular/core';
let SingleAppareilComponent = /** @class */ (() => {
    let SingleAppareilComponent = class SingleAppareilComponent {
        constructor(appareilService, route) {
            this.appareilService = appareilService;
            this.route = route;
            this.name = 'Appareil';
            this.status = 'Status';
        }
        ngOnInit() {
            const id = this.route.snapshot.params['id'];
            this.name = this.appareilService.getAppareilId(+id).name;
            this.status = this.appareilService.getAppareilId(+id).status;
        }
    };
    SingleAppareilComponent = __decorate([
        Component({
            selector: 'app-single-appareil',
            templateUrl: './single-appareil.component.html',
            styleUrls: ['./single-appareil.component.scss']
        })
    ], SingleAppareilComponent);
    return SingleAppareilComponent;
})();
export { SingleAppareilComponent };
//# sourceMappingURL=single-appareil.component.js.map