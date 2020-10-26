import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
let ApplicationComponent = /** @class */ (() => {
    let ApplicationComponent = class ApplicationComponent {
        constructor() {
        }
        ngOnInit() {
        }
        getColor() {
            return 'green';
        }
        isJEE() {
            const position = this.techno.indexOf('JEE');
            if (position > 0) {
                return true;
            }
            else {
                return false;
            }
        }
    };
    __decorate([
        Input()
    ], ApplicationComponent.prototype, "central_base", void 0);
    __decorate([
        Input()
    ], ApplicationComponent.prototype, "name", void 0);
    __decorate([
        Input()
    ], ApplicationComponent.prototype, "last_version_analyzed", void 0);
    __decorate([
        Input()
    ], ApplicationComponent.prototype, "last_update", void 0);
    __decorate([
        Input()
    ], ApplicationComponent.prototype, "date_snapshot", void 0);
    __decorate([
        Input()
    ], ApplicationComponent.prototype, "cast_version", void 0);
    __decorate([
        Input()
    ], ApplicationComponent.prototype, "server_name", void 0);
    __decorate([
        Input()
    ], ApplicationComponent.prototype, "techno", void 0);
    __decorate([
        Input()
    ], ApplicationComponent.prototype, "id", void 0);
    __decorate([
        Input()
    ], ApplicationComponent.prototype, "indexOfApplication", void 0);
    ApplicationComponent = __decorate([
        Component({
            selector: 'app-application',
            templateUrl: './application.component.html',
            styleUrls: ['./application.component.scss']
        })
    ], ApplicationComponent);
    return ApplicationComponent;
})();
export { ApplicationComponent };
//# sourceMappingURL=application.component.js.map