import { Component, OnInit, ViewChild } from '@angular/core';
import { ApplicationService } from '../services/application.service';
import { Subscription } from 'rxjs/Subscription';
import { MatSort} from '@angular/material/sort';
import { MatTableDataSource} from '@angular/material/table';
import { MatPaginator} from '@angular/material/paginator';

export interface application {
  id: number,
  name: string;
  techno: string;
  server_name: string;
  central_base: string;
  last_version_analyzed: string;
  cast_version: string;
  last_update: string;
}

const ELEMENT_DATA: application[] = [
  {id: 1, name: 'FAKE app_1', techno: 'Java', server_name: 'css1', central_base: 'central_1', last_version_analyzed: 'v1.2', cast_version: '7.3.21', last_update: '01/01/20'},
  {id: 2, name: 'FAKE app_2', techno: 'Angular', server_name: 'css1', central_base: 'central_2', last_version_analyzed: 'v1.5', cast_version: '8.2.1', last_update: '01/01/20'},
  {id: 3, name: 'FAKE app_3', techno: 'JEE', server_name: 'css1', central_base: 'central_3', last_version_analyzed: 'v2.2', cast_version: '8.3', last_update: '01/01/20'}
];


@Component({
  selector: 'app-application-list',
  templateUrl: './application-list.component.html',
  styleUrls: ['./application-list.component.scss']
})
export class ApplicationListComponent implements OnInit {

  displayedColumns: string[] = ['name', 'server_name', 'central_base', 'last_version_analyzed', 'last_update', 'cast_version'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  applications = [
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

  applicationSubscription: Subscription;

  constructor(private applicationService: ApplicationService) { }

  ngOnInit(): void {
    

    console.log("ApplicationListComponent.ngOnInit");
    this.applicationSubscription = this.applicationService.applicationSubject.subscribe(
      (applications: any[]) => {
        this.applications = applications;
        this.dataSource = new MatTableDataSource(applications);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;

      }
    );
    this.applicationService.getApplicationsSnapshotREST();
    this.applicationService.setApplicationMenu(null);
  }

  onFetch(){
    console.log("ApplicationListComponent.onFetch");
  	this.applicationService.getApplicationsSnapshotREST();
  	this.applications = this.applicationService.getApplications();
  }
  
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  
}
