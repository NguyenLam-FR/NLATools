import { __decorate } from "tslib";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/Forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { MonPremierComponent } from './mon-premier/mon-premier.component';
import { AppareilComponent } from './appareil/appareil.component';
import { ApplicationService } from './services/application.service';
import { AppareilService } from './services/appareil.service';
import { AuthService } from './services/auth.service';
import { AuthGard } from './services/auth-gard.service';
import { UserService } from './services/user.service';
import { AuthComponent } from './auth/auth.component';
import { AppareilViewComponent } from './appareil-view/appareil-view.component';
import { RouterModule } from '@angular/router';
import { SingleAppareilComponent } from './single-appareil/single-appareil.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { EditAppareilComponent } from './edit-appareil/edit-appareil.component';
import { UserListComponent } from './user-list/user-list.component';
import { NewUserComponent } from './new-user/new-user.component';
import { ApplicationComponent } from './application/application.component';
import { ApplicationListComponent } from './application-list/application-list.component';
import { ScriptSQLComponent } from './script-sql/script-sql.component';
import { NomenclatureComponent } from './nomenclature/nomenclature.component';
import { SingleApplicationActionPlanComponent } from './single-application-action-plan/single-application-action-plan.component';
import { SingleApplicationIdentityComponent } from './single-application-identity/single-application-identity.component';
const appRoutes = [
    { path: 'appareils', canActivate: [AuthGard], component: AppareilViewComponent },
    { path: 'appareils/:id', canActivate: [AuthGard], component: SingleAppareilComponent },
    { path: 'applications', component: ApplicationListComponent },
    { path: 'applicationIdentity/:id', component: SingleApplicationIdentityComponent },
    { path: 'applicationActionPlan/:id', component: SingleApplicationActionPlanComponent },
    { path: 'edit', canActivate: [AuthGard], component: EditAppareilComponent },
    { path: 'users', component: UserListComponent },
    { path: 'scriptSQL', component: ScriptSQLComponent },
    { path: 'nomenclature', component: NomenclatureComponent },
    { path: 'new-user', component: NewUserComponent },
    { path: 'auth', component: AuthComponent },
    { path: '', component: AppareilViewComponent },
    { path: 'not-found', component: FourOhFourComponent },
    { path: '**', redirectTo: 'not-found' }
];
let AppModule = /** @class */ (() => {
    let AppModule = class AppModule {
    };
    AppModule = __decorate([
        NgModule({
            declarations: [
                AppComponent,
                MonPremierComponent,
                AppareilComponent,
                AuthComponent,
                AppareilViewComponent,
                SingleAppareilComponent,
                FourOhFourComponent,
                EditAppareilComponent,
                UserListComponent,
                NewUserComponent,
                ApplicationComponent,
                ApplicationListComponent,
                ScriptSQLComponent,
                NomenclatureComponent,
                SingleApplicationActionPlanComponent,
                SingleApplicationIdentityComponent
            ],
            imports: [
                BrowserModule,
                FormsModule,
                HttpClientModule,
                ReactiveFormsModule,
                RouterModule.forRoot(appRoutes)
            ],
            providers: [
                AppareilService,
                ApplicationService,
                AuthService,
                AuthGard,
                UserService
            ],
            bootstrap: [AppComponent]
        })
    ], AppModule);
    return AppModule;
})();
export { AppModule };
//# sourceMappingURL=app.module.js.map