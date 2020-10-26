import { Component, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { RefRulesService } from '../services/ref-rules.service';
import { ApplicationService } from '../services/application.service';
import { MatSort} from '@angular/material/sort';
import { MatTableDataSource} from '@angular/material/table';
import { MatPaginator} from '@angular/material/paginator';

export interface rulePAAgg {
  metric_id: number;
  id_outil: number;
  severity: string;
	metric_description: string;
}

const ELEMENT_DATA_PA: rulePAAgg[] = [
  {metric_id: 1770, id_outil: 1, severity: 'minor', metric_description:'regle 1'},
  {metric_id: 1775, id_outil: 2, severity: 'severe', metric_description:'regle 2'},
  {metric_id: 1780, id_outil: 3, severity: 'critical', metric_description:'regle 3'},
];

@Component({
  selector: 'app-rules-referentiel',
  templateUrl: './rules-referentiel.component.html',
  styleUrls: ['./rules-referentiel.component.scss']
})
export class RulesReferentielComponent implements OnInit {

  displayedColumnsPA: string[] = ['id_outil', 'severity', 'metric_description','hf', 'date_premier', 'date_fin', 'nb_application'];
  dataSourcePA = new MatTableDataSource(ELEMENT_DATA_PA);


  @ViewChild(MatSort, {static: true}) sortPA: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginatorPA: MatPaginator;


  rulesSubscription: Subscription;
  rules: any[];

  constructor(private applicationService: ApplicationService,
              private refRulesService: RefRulesService) { }

  ngOnInit(): void {
    
    this.applicationService.setApplicationMenu(null);

    this.rulesSubscription = this.refRulesService.ruleSubject.subscribe(
      (rules: any[]) => {        
        this.rules = rules;
        this.dataSourcePA = new MatTableDataSource(this.rules);
        this.dataSourcePA.sort = this.sortPA;
        this.dataSourcePA.paginator = this.paginatorPA;
        console.log("this.rules="+this.rules);   
//        this.dataSource = new MatTableDataSource(this.rules);
  //      this.dataSource.sort = this.sort;
    //    this.dataSource.paginator = this.paginator;
      }
    );
    this.refRulesService.getRulesAgg();

  }

  applyFilter(event: Event) {
    const filterValuePA = (event.target as HTMLInputElement).value;
    this.dataSourcePA.filter = filterValuePA.trim().toLowerCase();
  }


}
