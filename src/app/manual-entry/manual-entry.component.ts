import { Component, OnInit, ViewChild } from '@angular/core';
import { ApplicationManService } from '../services/application-man.service';
import { ApplicationService } from '../services/application.service';
import { Subscription } from 'rxjs/Subscription';
import { MatSort} from '@angular/material/sort';
import { MatTableDataSource} from '@angular/material/table';
import { MatPaginator} from '@angular/material/paginator';


export interface applicationMan {
  id: number,
	name: String,
	url: String,
	prestataire: String,
	domaine_metier: String,
	tma: String,
	business_value: number;
}

const ELEMENT_DATA: applicationMan[] = [
  {id: 1, name: 'FAKE app_1', url: 'url1', prestataire: 'presta1', domaine_metier: 'domaine 1', tma: 'cap gemini', business_value: 3},
  {id: 2, name: 'FAKE app_2', url: 'url2', prestataire: 'presta2', domaine_metier: 'domaine 2', tma: 'cap gemini', business_value: 3.4},
  {id: 3, name: 'FAKE app_3', url: 'url3', prestataire: 'presta3', domaine_metier: 'domaine 3', tma: 'cap gemini', business_value: 2.6},
];


@Component({
  selector: 'app-manual-entry',
  templateUrl: './manual-entry.component.html',
  styleUrls: ['./manual-entry.component.scss']
})
export class ManualEntryComponent implements OnInit {
  displayedColumns: string[] = ['name','domaine_metier',  'prestataire', 'tma'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  applicationsSubscription: Subscription;
  applications: any[];


  constructor(private applicationManService: ApplicationManService,
              private applicationService: ApplicationService
              ) { }

  ngOnInit(): void {
    console.log("SizingComplexiteComponent.ngOnInit");
    this.applicationsSubscription = this.applicationManService.applicationManSubject.subscribe(
      (applications: any[]) => {
        this.applications = applications;
        this.dataSource = new MatTableDataSource(this.applications);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      }
    );
    this.applicationManService.getApplicationsMan();
    this.applicationService.setApplicationMenu(null);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
