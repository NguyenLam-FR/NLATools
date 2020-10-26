import { __decorate } from "tslib";
import { Component } from '@angular/core';
let EditAppareilComponent = /** @class */ (() => {
    let EditAppareilComponent = class EditAppareilComponent {
        constructor(appareilService, router) {
            this.appareilService = appareilService;
            this.router = router;
            this.defaultOnOff = 'éteint';
        }
        ngOnInit() {
        }
        onSubmit(form) {
            const name = form.value['name'];
            const status = form.value['status'];
            this.appareilService.addAppareil(name, status);
            this.router.navigate(['/appareils']);
        }
    };
    EditAppareilComponent = __decorate([
        Component({
            selector: 'app-edit-appareil',
            templateUrl: './edit-appareil.component.html',
            styleUrls: ['./edit-appareil.component.scss']
        })
    ], EditAppareilComponent);
    return EditAppareilComponent;
})();
export { EditAppareilComponent };
//# sourceMappingURL=edit-appareil.component.js.map