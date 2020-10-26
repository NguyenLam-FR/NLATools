import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
let AppareilComponent = /** @class */ (() => {
    let AppareilComponent = class AppareilComponent {
        constructor(appareilService) {
            this.appareilService = appareilService;
        }
        ngOnInit() {
        }
        getStatus() {
            return this.appareilStatus;
        }
        getColor() {
            if (this.appareilStatus === 'allumé') {
                return 'green';
            }
            else if (this.appareilStatus === 'éteint') {
                return 'red';
            }
        }
        onSwitchOn() {
            this.appareilService.switchOnOne(this.indexOfAppareil);
        }
        onSwitchOff() {
            this.appareilService.switchOffOne(this.indexOfAppareil);
        }
    };
    __decorate([
        Input()
    ], AppareilComponent.prototype, "appareilName", void 0);
    __decorate([
        Input()
    ], AppareilComponent.prototype, "appareilStatus", void 0);
    __decorate([
        Input()
    ], AppareilComponent.prototype, "indexOfAppareil", void 0);
    __decorate([
        Input()
    ], AppareilComponent.prototype, "id", void 0);
    AppareilComponent = __decorate([
        Component({
            selector: 'app-appareil',
            templateUrl: './appareil.component.html',
            styleUrls: ['./appareil.component.scss']
        })
    ], AppareilComponent);
    return AppareilComponent;
})();
export { AppareilComponent };
//# sourceMappingURL=appareil.component.js.map