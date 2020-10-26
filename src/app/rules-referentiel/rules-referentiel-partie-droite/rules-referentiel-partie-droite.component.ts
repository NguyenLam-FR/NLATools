import { Component, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { RefRulesService } from '../../services/ref-rules.service';
import { MatSort} from '@angular/material/sort';
import { MatTableDataSource} from '@angular/material/table';
import { MatPaginator} from '@angular/material/paginator';

export interface ruleAgg {
  metric_labels: string;
  metric_ids: string;
  name: string,
  nbrule: number;
  nbpa: number;
  absday: string;
  outil: number;
  last_version_analyzed: string;
}

const ELEMENT_DATA: ruleAgg[] = [
  {metric_labels: 'test, regle', metric_ids: '123,234,345', name: 'rule1', nbrule: 1, nbpa: 10, absday:'2018/09/09', outil: 2, last_version_analyzed:'v1.0'},
  {metric_labels: 'test, regle', metric_ids: '123,234,345', name: 'rule2', nbrule: 2, nbpa: 20, absday:'2018/09/09', outil: 1, last_version_analyzed:'v1.0'},
  {metric_labels: 'test, regle', metric_ids: '123,234,345', name: 'rule3', nbrule: 3, nbpa: 30, absday:'2018/09/09', outil: 1, last_version_analyzed:'v1.0'}
];

@Component({
  selector: 'app-rules-referentiel-partie-droite',
  templateUrl: './rules-referentiel-partie-droite.component.html',
  styleUrls: ['./rules-referentiel-partie-droite.component.scss']
})
export class RulesReferentielPartieDroiteComponent implements OnInit {
  displayedColumns: string[] = ['nbrule','nbpa','absday','last_version_analyzed','name','outil'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  rulesDetailSubscription: Subscription;
  rulesDetail: any[];
 
  constructor(private refRulesService: RefRulesService) { }

  ngOnInit(): void {
    this.rulesDetailSubscription = this.refRulesService.ruleDetailSubject.subscribe(
      (rulesDetail: any[]) => {        
        this.rulesDetail = rulesDetail;
     
        this.dataSource = new MatTableDataSource(this.rulesDetail);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;

      }
    );
    this.refRulesService.getRulesDetailAgg();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

   }
}
