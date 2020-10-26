import { __decorate } from "tslib";
import { Component } from '@angular/core';
let ApplicationListComponent = /** @class */ (() => {
    let ApplicationListComponent = class ApplicationListComponent {
        constructor(applicationService) {
            this.applicationService = applicationService;
            this.applications = [
                {
                    id: 1,
                    name: 'TEMPLATE App 1',
                    central_base: 'central base 1'
                },
                {
                    id: 2,
                    name: 'TEMPLATE App 2',
                    central_base: 'central base 2'
                },
                {
                    id: 3,
                    name: 'TEMPLATE App 3',
                    central_base: 'central base 3'
                }
            ];
        }
        ngOnInit() {
            this.applicationSubscription = this.applicationService.applicationSubject.subscribe((applicationsss) => {
                this.applications = applicationsss;
            });
            this.applicationService.getApplicationREST();
        }
        onFetch() {
            this.applicationService.getApplicationREST();
            this.applications = this.applicationService.getApplications();
        }
    };
    ApplicationListComponent = __decorate([
        Component({
            selector: 'app-application-list',
            templateUrl: './application-list.component.html',
            styleUrls: ['./application-list.component.scss']
        })
    ], ApplicationListComponent);
    return ApplicationListComponent;
})();
export { ApplicationListComponent };
//# sourceMappingURL=application-list.component.js.map