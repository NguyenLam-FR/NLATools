import { __decorate } from "tslib";
import { Component } from '@angular/core';
let SingleApplicationActionPlanComponent = /** @class */ (() => {
    let SingleApplicationActionPlanComponent = class SingleApplicationActionPlanComponent {
        constructor(applicationService, route) {
            this.applicationService = applicationService;
            this.route = route;
            this.name = 'Appareil template';
            this.tqi = 1.0;
            this.techno = 'ma techno';
            this.cast_version = 'cast version';
            this.last_version_analyzed = 'last version analyzed';
            this.url = 'url';
            this.date_snapshot = '1er janvier 2000';
            this.loc = 10000;
            this.cc = 50000;
        }
        ngOnInit() {
            const id = this.route.snapshot.params['id'];
            this.snapshotsSubscription = this.applicationService.getSnapshotsREST.subscribe((snapshots) => {
                this.name = application[0].name;
                this.techno = application[0].techno;
                this.tqi = application[0].tqi;
                this.cast_version = application[0].cast_version;
                this.last_version_analyzed = application[0].last_version_analyzed;
                this.url = application[0].url;
                this.loc = application[0].loc;
                this.cc = application[0].cc;
                this.date_snapshot = application[0].date_snapshot;
                // this.applicationService.emitOneApplicationSubject();
            });
            this.applicationService.getApplicationByIdREST(id);
        }
    };
    SingleApplicationActionPlanComponent = __decorate([
        Component({
            selector: 'app-single-application-action-plan',
            templateUrl: './single-application-action-plan.component.html',
            styleUrls: ['./single-application-action-plan.component.scss']
        })
    ], SingleApplicationActionPlanComponent);
    return SingleApplicationActionPlanComponent;
})();
export { SingleApplicationActionPlanComponent };
//# sourceMappingURL=single-application-action-plan.component.js.map