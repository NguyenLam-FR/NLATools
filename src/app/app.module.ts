import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/Forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { MonPremierComponent } from './mon-premier/mon-premier.component';
import { AppareilComponent } from './appareil/appareil.component';
import { IgxExcelExporterService } from "igniteui-angular";

import { ExtensionService } from './services/extension.service';
import { ApplicationService } from './services/application.service';
import { ApplicationManService } from './services/application-man.service';
import { SnapshotService } from './services/snapshot.service';
import { ServerCssService } from './services/server-css.service';
import { RefRulesService } from './services/ref-rules.service';
import { RefPonderationCCService } from './services/ref-ponderation-cc.service';
import { ActionPlanService } from './services/action-plan.service';
import { VariablesGlobales } from './services/variables.globales';


import { AppareilService } from './services/appareil.service';
import { AuthService } from './services/auth.service';
import { AuthGard } from './services/auth-gard.service';
import { UserService } from './services/user.service';
import { AuthComponent } from './auth/auth.component';
import { AppareilViewComponent } from './appareil-view/appareil-view.component';
import { RouterModule, Routes } from '@angular/router';
import { SingleAppareilComponent } from './single-appareil/single-appareil.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { EditAppareilComponent } from './edit-appareil/edit-appareil.component';
import { ApplicationComponent } from './application/application.component';
import { ApplicationListComponent } from './application-list/application-list.component';
import { ScriptSQLComponent } from './script-sql/script-sql.component';
import { NomenclatureComponent } from './nomenclature/nomenclature.component';
import { SingleApplicationActionPlanComponent } from './single-application-action-plan/single-application-action-plan.component';
import { SingleApplicationIdentityComponent } from './single-application-identity/single-application-identity.component';
import { SingleApplicationActionPlanSnapshotComponent } from './single-application-action-plan-snapshot/single-application-action-plan-snapshot.component';
import { ApplicationSousMenuComponent } from './application-sous-menu/application-sous-menu.component';
import { ChartTestComponent } from './chart-test/chart-test.component';
import { StatisticChartsComponent } from './statistic-charts/statistic-charts.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {A11yModule} from '@angular/cdk/a11y';
import {ClipboardModule} from '@angular/cdk/clipboard';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {PortalModule} from '@angular/cdk/portal';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {CdkStepperModule} from '@angular/cdk/stepper';
import {CdkTableModule} from '@angular/cdk/table';
import {CdkTreeModule} from '@angular/cdk/tree';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatBadgeModule} from '@angular/material/badge';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatChipsModule} from '@angular/material/chips';
import {MatStepperModule} from '@angular/material/stepper';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatNativeDateModule, MatRippleModule} from '@angular/material/core';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSliderModule} from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatTreeModule} from '@angular/material/tree';

import { SingleRulesListComponent } from './single-rules-list/single-rules-list.component';
import { ExtensionListComponent } from './extension-list/extension-list.component';
import { PopupExtensionListForApp } from './extension-list/extension-list.component';
import { SizingComplexiteComponent } from './sizing-complexite/sizing-complexite.component';
import { RulesReferentielComponent } from './rules-referentiel/rules-referentiel.component';
import { HomepageComponent } from './homepage/homepage.component';
import { RulesReferentielPartieDroiteComponent } from './rules-referentiel/rules-referentiel-partie-droite/rules-referentiel-partie-droite.component';
import { ManualEntryComponent } from './manual-entry/manual-entry.component';
import { StatisticTableComponent } from './statistic-table/statistic-table.component';


const appRoutes: Routes = [
  { path: 'appareils', canActivate: [AuthGard], component: AppareilViewComponent },
  { path: 'appareils/:id', canActivate: [AuthGard], component: SingleAppareilComponent },
  { path: 'applications', canActivate: [AuthGard], component: ApplicationListComponent },
  { path: 'extensions', canActivate: [AuthGard], component: ExtensionListComponent },
  { path: 'applicationIdentity/:id', canActivate: [AuthGard], component: SingleApplicationIdentityComponent },
  { path: 'applicationActionPlan/:id/:idOutil', canActivate: [AuthGard], component: SingleApplicationActionPlanComponent },
  { path: 'edit', canActivate: [AuthGard], component: EditAppareilComponent },
  { path: 'rulesList', canActivate: [AuthGard], component: SingleRulesListComponent },
  { path: 'manualEntry', canActivate: [AuthGard], component: ManualEntryComponent },
  { path: 'chartTest', component: ChartTestComponent },
  { path: 'statistic-chart', canActivate: [AuthGard], component: StatisticChartsComponent },
  { path: 'statistic-table', canActivate: [AuthGard], component: StatisticTableComponent },
  { path: 'scriptSQL', canActivate: [AuthGard], component: ScriptSQLComponent },
  { path: 'nomenclature', canActivate: [AuthGard], component: NomenclatureComponent},
  { path: 'sizingComplexite', canActivate: [AuthGard], component: SizingComplexiteComponent},
  { path: 'ruleReferentiel', canActivate: [AuthGard], component: RulesReferentielComponent},
  { path: 'homepageCard', component: HomepageComponent },
  { path: 'auth', component: AuthComponent },
  { path: '', component: HomepageComponent },
  { path: 'not-found', component: FourOhFourComponent },
  { path: '**', redirectTo: 'not-found' }
];

@NgModule({
  declarations: [
    AppComponent,
    MonPremierComponent,
    AppareilComponent,
    AuthComponent,
    AppareilViewComponent,
    SingleAppareilComponent,
    FourOhFourComponent,
    EditAppareilComponent,
    ApplicationComponent,
    ApplicationListComponent,
    ScriptSQLComponent,
    NomenclatureComponent,
    SingleApplicationActionPlanComponent,
    SingleApplicationIdentityComponent,
    SingleApplicationActionPlanSnapshotComponent,
    ApplicationSousMenuComponent,
    ChartTestComponent,
    StatisticChartsComponent,
    SingleRulesListComponent,
    ExtensionListComponent,
    SizingComplexiteComponent,
    RulesReferentielComponent,
    HomepageComponent,
    PopupExtensionListForApp,
    RulesReferentielPartieDroiteComponent,
    ManualEntryComponent,
    StatisticTableComponent
  ],
  imports: [
    BrowserModule,  
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    MatSliderModule,
    MatTableModule,
    A11yModule,
    ClipboardModule,
    CdkStepperModule,
    CdkTableModule,
    CdkTreeModule,
    DragDropModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    PortalModule,
    ScrollingModule
  ],
  providers: [
    AppareilService,
    ExtensionService,
    ApplicationService,
    ApplicationManService,
    SnapshotService,
    ServerCssService,
    RefPonderationCCService,
    ActionPlanService,
    RefRulesService,
    AuthService,
    AuthGard,
    VariablesGlobales,
    IgxExcelExporterService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
