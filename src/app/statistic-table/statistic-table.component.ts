import { Component, OnInit, ViewChild } from '@angular/core';
import { ApplicationService } from '../services/application.service';
import { Subscription } from 'rxjs/Subscription';

import { MatSort} from '@angular/material/sort';
import { MatTableDataSource} from '@angular/material/table';
import { MatPaginator} from '@angular/material/paginator';

export interface applicationsInterface {
  name: string,
  a2008: number;
  a2010: number;
  a2011: number;
  a2012: number;
  a2013: number;
  a2014: number;
  a2015: number;
  a2016: number;
  a2017: number;
  a2018: number;
  a2019: number;
  a2020: number;
}

const ELEMENT_DATA: applicationsInterface[] = [
  {name: 'App1', a2008: 1, a2010: 3, a2011: 5, a2012: 6, a2013: 7, a2014: 7, a2015: 7, a2016: 7, a2017: 7, a2018: 7, a2019: 7, a2020: 7},
  {name: 'App2', a2008: 1, a2010: 0, a2011: 5, a2012: 6, a2013: 7, a2014: 4, a2015: 7, a2016: 7, a2017: 7, a2018: 7, a2019: 7, a2020: 7},
  {name: 'App3', a2008: 1, a2010: 2, a2011: 5, a2012: 6, a2013: 7, a2014: 3, a2015: 7, a2016: 7, a2017: 7, a2018: 7, a2019: 7, a2020: 7},
];


@Component({
  selector: 'app-statistic-table',
  templateUrl: './statistic-table.component.html',
  styleUrls: ['./statistic-table.component.scss']
})
export class StatisticTableComponent implements OnInit {
  displayedColumns: string[] = ['name', 'a2008', 'a2010', 'a2011', 'a2012', 'a2013', 'a2014', 'a2015', 'a2016', 'a2017', 'a2018', 'a2019', 'a2020'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  applicationListTemp: applicationsInterface[] = [];
  applicationList: any[] = ELEMENT_DATA;
  applicationSubscription: Subscription;


  constructor(private applicationService: ApplicationService) { }

  ngOnInit(): void {
    this.applicationSubscription = this.applicationService.statApplicationsByYearEtat3Subject.subscribe(
      (statAppByYear: any[]) => {
        //this.applicationList = statAppByYear;
        console.log(this.applicationList);
        for (var app of statAppByYear) {
          for (var appli of this.applicationListTemp) {
            if( appli.name === app.name){
              // recupere l'abscisse
            } else {
              this.applicationListTemp.push()
            }
          }
        }
        
        
        this.dataSource = new MatTableDataSource(this.applicationList);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      }        
      
    );
    this.applicationService.getStatApplicationsByYearEtat3();
    this.applicationService.setApplicationMenu(null);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
