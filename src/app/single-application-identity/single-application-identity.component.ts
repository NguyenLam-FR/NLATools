import { Component, OnInit, ViewChild } from '@angular/core';
import { ApplicationService } from '../services/application.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { MatSort} from '@angular/material/sort';
import { MatTableDataSource} from '@angular/material/table';
import { MatPaginator} from '@angular/material/paginator';

export interface extension {
  label: string,
  version: string;
}

const ELEMENT_DATA: extension[] = [
  {label: 'mon extension', version: '1.2.3'},
  {label: 'ma 2eme extension', version: '2.3.4'}
];

@Component({
  selector: 'app-single-application-identity',
  templateUrl: './single-application-identity.component.html',
  styleUrls: ['./single-application-identity.component.scss']
})
export class SingleApplicationIdentityComponent implements OnInit {
  displayedColumns: string[] = ['label', 'version'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;


  application: any;
  extensions: any[];

  applicationSubscription: Subscription;
  extensionSubscription: Subscription;

  constructor(private applicationService: ApplicationService,
  			  private route: ActivatedRoute) { }

  ngOnInit(): void {
  	const id = this.route.snapshot.params['id'];
  	this.applicationSubscription = this.applicationService.oneApplicationSubject.subscribe(
      (application: any) => {
        this.application = application[0];
        this.applicationService.setApplicationMenu(application[0]);
        console.log("SingleApplicationIdentityComponent.ngOnInit.après appel setApplicationMenu application[0].name ="+ application[0].name);
       // this.applicationService.emitOneApplicationSubject();
       
      }
    );
    this.applicationService.getApplicationByIdREST(id);



    this.extensionSubscription = this.applicationService.extensionByAppSubject.subscribe(
      (extensions: any[]) => {
        this.extensions = extensions;
        this.dataSource = new MatTableDataSource(extensions);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
        
       // console.log("SingleApplicationIdentityComponent.ngOnInit.après appel setApplicationMenu application[0].name ="+ application[0].name);
       // this.applicationService.emitOneApplicationSubject();
      }
    );
    this.applicationService.getExtensionByApp(id);
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


}




