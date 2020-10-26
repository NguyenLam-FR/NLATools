import { Component, OnInit, ViewChild } from '@angular/core';
import { ApplicationService } from '../services/application.service';
import { RefPonderationCCService } from '../services/ref-ponderation-cc.service';
import { Subscription } from 'rxjs/Subscription';
import { MatSort} from '@angular/material/sort';
import { MatTableDataSource} from '@angular/material/table';
import { MatPaginator} from '@angular/material/paginator';

export interface application {
  id: number,
  name: string;
  last_version_analyzed: string;
  loc: number;
  tqi: number;
  vhcc: number;
  hcc: number;
  acc: number;
  lcc: number;
  vhfo: number;
  hfo: number;
  afo: number;
  lfo: number;
  fp: number;
}

const ELEMENT_DATA: application[] = [
  {id: 1, name: 'FAKE app_1', last_version_analyzed: 'v1.2', loc: 1200430, tqi: 3.12, vhcc: 10, hcc: 5, acc:43,lcc:9, vhfo: 10, hfo: 5, afo:43,lfo:9,fp:500},
  {id: 2, name: 'FAKE app_2', last_version_analyzed: 'v1.5', loc: 564012, tqi: 2.92, vhcc: 10, hcc: 5, acc:43,lcc:9, vhfo: 10, hfo: 5, afo:43,lfo:9,fp:500},
  {id: 3, name: 'FAKE app_3', last_version_analyzed: 'v2.2', loc: 200342, tqi: 3.01, vhcc: 10, hcc: 5, acc:43,lcc:9, vhfo: 10, hfo: 5, afo:43,lfo:9,fp:500}
];

@Component({
  selector: 'app-sizing-complexite',
  templateUrl: './sizing-complexite.component.html',
  styleUrls: ['./sizing-complexite.component.scss']
})
export class SizingComplexiteComponent implements OnInit {
  displayedColumns: string[] = ['name','last_version_analyzed',  'loc', 'tqi', 'vhcc', 'hcc', 'acc','lcc', 'vhfo', 'hfo', 'afo','lfo','fp','total'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;


  refPonderationCCSubscription: Subscription;
  refPonderationCC: any[];
  applicationSubscription: Subscription;
  /*
  applications = [
    {
      id: 1,
      name: 'TEMPLATE App 1'
      
    },
    {
      id: 2,
      name: 'TEMPLATE App 2'
      
    },
    {
      id: 3,
      name: 'TEMPLATE App 3'
    
    }
    ];
  */  
  applications: any[] = [];
  
  constructor(private applicationService: ApplicationService,
              private refPonderationCCService: RefPonderationCCService) { }

  ngOnInit(): void {
    console.log("SizingComplexiteComponent.ngOnInit");
    this.applicationSubscription = this.applicationService.applicationSubject.subscribe(
      (applications: any[]) => {
        
        for (var reponse of applications) {
          const point = {
            loc: reponse.loc,
            tqi: reponse.tqi,
            vhcc: reponse.vhcc,
            hcc: reponse.hcc,
            acc: reponse.acc,
            lcc: reponse.lcc,
            vhfo: reponse.vhfo,
            hfo: reponse.hfo,
            afo: reponse.afo,
            lfo: reponse.lfo,
            fp: reponse.fp,
            name: reponse.name,
            last_version_analyzed: reponse.last_version_analyzed,
            // TODO: Attention code en dur !!!
            total: (reponse.loc * this.refPonderationCC[0].loc + (4.01 - reponse.tqi) * this.refPonderationCC[0].tqi +
                   reponse.vhcc * this.refPonderationCC[0].vhcc + reponse.hcc * this.refPonderationCC[0].hcc + reponse.acc * this.refPonderationCC[0].acc + reponse.lcc * this.refPonderationCC[0].lcc +
                   reponse.vhfo * this.refPonderationCC[0].vhfo + reponse.hfo * this.refPonderationCC[0].hfo + reponse.afo * this.refPonderationCC[0].afo + reponse.lfo * this.refPonderationCC[0].lfo).toFixed(2)
          }
          //console.log(point.total.toFixed(2));
          //point.total = point.total.toFixed(2);
          this.applications.push(point);
        }
        
//        this.applications = applications;
        this.dataSource = new MatTableDataSource(this.applications);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;

        
      }
    );
    this.applicationService.getApplicationsSnapshotREST();
    this.applicationService.setApplicationMenu(null);

    this.refPonderationCCSubscription = this.refPonderationCCService.refPonderationSubject.subscribe(
      (refPonderationCC: any[]) => {
        this.refPonderationCC = refPonderationCC;
        console.log("this.refPonderationCC="+this.refPonderationCC);
      }
    );
    this.refPonderationCCService.getRefPonderationCC();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
