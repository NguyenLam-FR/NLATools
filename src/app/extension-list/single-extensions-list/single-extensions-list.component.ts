import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { ActionPlanService } from '../services/action-plan.service';
import { MatSort} from '@angular/material/sort';
import { ActivatedRoute } from '@angular/router';
import { MatTableDataSource} from '@angular/material/table';
import { MatPaginator} from '@angular/material/paginator';
import { MAT_DIALOG_DATA} from '@angular/material/dialog';
import { IgxExcelExporterService, IgxExcelExporterOptions } from "igniteui-angular";

export interface DialogData {
  idApp: 1;
  idSnapshot:2;
  apStatus: 'NEW';
}

export interface application {
  id: number,
  id_metric: number;
  metric_description: string;
  priority: string;
  criticalViolation: string;
  nb_object: string;
  comment_action: string;
  last_update: string;
}
 
const ELEMENT_DATA: application[] = [
  {id: 1, id_metric: 123, metric_description: 'Java', priority: 'css1', criticalViolation: 'central_1', nb_object: 'v1.2', comment_action: '7.3.21', last_update: '01/01/20'},
  {id: 2, id_metric: 234, metric_description: 'Angular', priority: 'css1', criticalViolation: 'nb_object', nb_object: 'v1.5', comment_action: '8.2.1', last_update: '01/01/20'},
  {id: 3, id_metric: 122, metric_description: 'JEE', priority: 'css1', criticalViolation: 'nb_object', nb_object: 'v2.2', comment_action: '8.3', last_update: '01/01/20'}
];

@Component({
  selector: 'app-single-rules-list',
  templateUrl: './single-rules-list.component.html',
  styleUrls: ['./single-rules-list.component.scss']
})
export class SingleRulesListComponent implements OnInit {
  displayedColumns: string[] = ['id_metric', 'metric_description', 'priority', 'criticalViolation', 'nb_object', 'comment_action'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  type_rule = 'NEW';

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  actionPlanList: any[];
  actionPlanListExport: any[] = [];
  actionPlanSubscription: Subscription;

  constructor(private actionPlanService: ActionPlanService,
              private route: ActivatedRoute,
              @Inject(MAT_DIALOG_DATA) public data: DialogData,
              private excelExportService: IgxExcelExporterService) { }

  public exportButtonHandler() {
    this.excelExportService.exportData(this.actionPlanListExport, new IgxExcelExporterOptions("ExportedDataFile"));
  }

  ngOnInit(): void {
  	const idApp = this.data.idApp;
  	const idSnapshot = this.data.idSnapshot;
  	const apStatus = this.data.apStatus;
    this.actionPlanSubscription = this.actionPlanService.actionPlanSubject.subscribe(
      (actionPlanList: any[]) => {
        this.actionPlanList = actionPlanList;
        this.dataSource = new MatTableDataSource(actionPlanList);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
        actionPlanList.forEach(element => {
          const ele =  {
            id_metric: element.id_metric, 
            metric_description: element.metric_description, 
            priority: element.priority, 
            criticalViolation: element.criticalViolation, 
            nb_object: element.nb_object, 
            comment_action: element.comment_action};
  
          this.actionPlanListExport.push(ele);
        });
        console.log(this.actionPlanList);
        this.type_rule = apStatus;
      }        
      
    );
    this.actionPlanService.getActionPLanList(idApp, idSnapshot, apStatus);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  getTotalCost() {
    return this.actionPlanList.map(t => t.nb_object).reduce((acc, value) => acc + value, 0);
  }

  getLibelle() {
    return this.actionPlanList[0].name;
  }

  getNbRules() {
    return this.actionPlanList.length;
  }

  getTypeRule() {
    return this.type_rule;
  }
}
