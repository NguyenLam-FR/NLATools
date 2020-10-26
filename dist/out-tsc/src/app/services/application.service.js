import { __decorate } from "tslib";
import { Subject } from 'rxjs/Subject';
import { Injectable } from '@angular/core';
let ApplicationService = /** @class */ (() => {
    let ApplicationService = class ApplicationService {
        constructor(httpClient) {
            this.httpClient = httpClient;
            this.applicationSubject = new Subject();
            this.snapshotSubject = new Subject();
            this.oneApplicationSubject = new Subject();
        }
        emitApplicationSubject() {
            this.applicationSubject.next(this.applications.slice());
        }
        emitOneApplicationSubject() {
            this.oneApplicationSubject.next(this.application);
        }
        emitSnapshotSubject() {
            this.snapshotSubject.next(this.snapshots.slice());
        }
        getApplications() {
            return this.applications;
        }
        getApplication(id) {
            const application = this.applications.find((applicationObject) => {
                return applicationObject.id === id;
            });
            return application;
        }
        getApplicationByIdREST(id) {
            this.httpClient.get('http://localhost:9090/ApplicationDetail/' + id)
                .subscribe((response) => {
                console.log(response);
                this.application = response;
                console.log(this.application);
                console.log('getApplicationByIdREST apres catch response');
                this.emitOneApplicationSubject();
            }, (err) => {
                console.log(err.error);
                console.log(err.name);
                console.log(err.message);
                console.log(err.status);
            });
            console.log('getApplicationByIdREST fin');
        }
        getApplicationREST() {
            this.httpClient.get('http://localhost:9090/ApplicationsSnapshot')
                .subscribe((response) => {
                console.log(response);
                this.applications = response;
                this.emitApplicationSubject();
            }, (err) => {
                console.log(err.error);
                console.log(err.name);
                console.log(err.message);
                console.log(err.status);
            });
            console.log('GET getApplicationREST fin ! : ');
        }
        getSnapshotsREST(id, idOutil) {
            this.httpClient.get('http://localhost:9090/SnapshotByAppAndOutil/' + id + '/' + idOutil)
                .subscribe((response) => {
                console.log(response);
                this.snapshots = response;
                this.emitSnapshotSubject();
            }, (err) => {
                console.log(err.error);
                console.log(err.name);
                console.log(err.message);
                console.log(err.status);
            });
            console.log('GET getSnapshotsREST fin ! : ');
        }
    };
    ApplicationService = __decorate([
        Injectable()
    ], ApplicationService);
    return ApplicationService;
})();
export { ApplicationService };
//# sourceMappingURL=application.service.js.map