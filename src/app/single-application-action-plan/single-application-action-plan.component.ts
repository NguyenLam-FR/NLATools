import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { ApplicationService } from '../services/application.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import * as HighCharts from 'highcharts';
import { SnapshotService } from '../services/snapshot.service';
 
import { MatSort} from '@angular/material/sort';
import { MatTableDataSource} from '@angular/material/table';
import { MatPaginator} from '@angular/material/paginator';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface snapshot {
  id: number,
  date_snapshot: string;
  etat_workflow: string;
  last_version_analyzed: string;
  nb_corrected: number;
}

const ELEMENT_DATA: snapshot[] = [
  {id: 1, date_snapshot: '12/12/2019', etat_workflow: '1', last_version_analyzed: 'v1.2', nb_corrected: 12},
  {id: 2, date_snapshot: '01/01/2020', etat_workflow: '2', last_version_analyzed: 'v1.2', nb_corrected: 24},
  {id: 3, date_snapshot: '04/05/2020', etat_workflow: '3', last_version_analyzed: 'v1.2', nb_corrected: 36},
];


@Component({
  selector: 'app-single-application-action-plan',
  templateUrl: './single-application-action-plan.component.html',
  styleUrls: ['./single-application-action-plan.component.scss']
})
export class SingleApplicationActionPlanComponent implements OnInit {

  displayedColumns: string[] = ['date_snapshot', 'etat_workflow', 'last_version_analyzed','nb_corrected'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  id_application = 0;
  snapshotsHTML: any[];
  snapshots: any[];
  snapshotsEtatReduitUniquement: any[] = [];

  snapshotsSubscription: Subscription;

  constructor(private applicationService: ApplicationService,
          private route: ActivatedRoute,
          public dialog: MatDialog) { }
 
  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    const idOutil = this.route.snapshot.params['idOutil'];
    this.snapshotsSubscription = this.applicationService.snapshotSubject.subscribe(
      (snapshots: any[]) => {
        this.snapshotsHTML = snapshots;
        this.snapshots = snapshots;
        const name = this.findFirstItem(this.snapshots);
        this.id_application = this.findIdApplication(this.snapshots);
        this.applicationService.setApplicationMenu(name);
        this.columnChartPopulation();
       
        let previous_version_analysed = '';
        let couleurFond = 'blanc';
        for (var snapshot of this.snapshotsHTML) {
          if(snapshot.last_version_analyzed === previous_version_analysed){
            snapshot.couleurFond = couleurFond;
          }  else {
            if( couleurFond === 'blanc') {
              couleurFond = 'bleu';
            } else {
              couleurFond = 'blanc';
            }
            previous_version_analysed = snapshot.last_version_analyzed;
            snapshot.couleurFond = couleurFond;
          }
        }

        for (var snapshot of snapshots) {
          if(snapshot.etat_workflow === 3){
            this.snapshotsEtatReduitUniquement.push(snapshot);
          }  
        }

        this.dataSource = new MatTableDataSource(snapshots);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
        
      }
    );
    this.applicationService.getSnapshotsREST(id,idOutil);
    

  }

  findFirstItem(snapshots: any[]){
    console.log('findFirstItem');
    const name = snapshots.find(
     (snapshotObject) =>{
       return 'ASTREA findFirstItem';//snapshotObject.name;
     } );
    console.log('findFirstItem name='+name.name);
    return name;
  }

  findIdApplication(snapshots: any[]){
    console.log('findIdApplication');
    const name = snapshots.find(
     (snapshotObject) =>{
       return 'ASTREA findIdApplication';//snapshotObject.name;
     } );
    console.log('findIdApplication ID='+name.id);
    return name.id;
  }

  columnChartPopulation() {
    const libelleAbscisse: string[] = [];
    const nbNew: number[] = [];
    const nbDeleted: number[] = [];
    const nbStill: number[] = [];
    const nbCorrected: number[] = [];
    let YaxisMax =20;
    let YaxisMin =0;

    for (var snapshot of this.snapshots) {
      if(snapshot.etat_workflow === 3){
        libelleAbscisse.push(snapshot.last_version_analyzed);
        nbNew.push(snapshot.nb_new);        
        nbStill.push(snapshot.nb_still_violation);
        const temp = snapshot.nb_new + snapshot.nb_still_violation;
        if( YaxisMax < temp ){
          YaxisMax = temp;
        }
        
      }  
      if(snapshot.etat_workflow === 1){
        nbCorrected.push(-snapshot.nb_corrected);      
        nbDeleted.push(-snapshot.obj_deleted);
        const temp = -(snapshot.nb_corrected + snapshot.obj_deleted);
        if( YaxisMin > temp ){
          YaxisMin = temp;
        }
      }
    }

    console.log('YaxisMax='+YaxisMax);
    HighCharts.chart({
      chart: {     
        renderTo: 'columnChartPA',
        type: 'column'},
      title: {      text: ''},
      exporting: {  enabled: false},
      legend: {     enabled: false},
      credits: {    enabled: false},

      xAxis: {
		    labels: {
          style: {  fontSize: '9px'	}
				},
        categories: libelleAbscisse,
      },

      yAxis: {
        min: YaxisMin,
            max: YaxisMax,
            title: {
                text: 'PA'
            },
            stackLabels: {
                enabled: true,
                style: {
                    fontWeight: 'bold',
                    color:  'gray'
                }
            }
        },
      tooltip: {
        headerFormat: ' ',
        pointFormat: '{series.name}: {point.y}'
      },
      plotOptions: {
        column: {
            stacking: 'normal',
            dataLabels: {
                enabled: false,
                color: 'white'
            }
        },
        series: {
          cursor: 'pointer',
          events: {
              click: function (event) {
                
              }
          }
      }
    },
      series: [
        {
        name: 'Corrected',
        color: '#01DF01',
        type: undefined,
        data: nbCorrected
      }
      , {
        name: 'Deleted',
        color: '#006600',
        type: undefined,
        data: nbDeleted
      }, {
        name: 'New',
         color: '#A4A4A4',
         type: undefined,
        data: nbNew
      }, {
        name: 'Still Violation',
        color: '#DF0101',
        type: undefined,
        data: nbStill
      }]
    });
  }


  onFetch(){
    if( this.snapshotsHTML === this.snapshots){
      this.snapshotsHTML = this.snapshotsEtatReduitUniquement;
    } else {
      this.snapshotsHTML = this.snapshots;
    }
  }


  purgeBaseCentral(){
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '650px',
      data: {
        id_application: this.id_application
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}



export interface DialogData {
  id_application: number
}
/**
 *  Popup de confirmation de purge des données dans la base centrale 
 */
@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'popupPurgeBaseCentralConfirm.html',
})
export class DialogOverviewExampleDialog implements OnInit {

  snapshotSubscription: Subscription;
  id_application = 0;
 
  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    public dialog: MatDialog,
    private snapshotService: SnapshotService) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
    this.id_application = this.data.id_application;
  }

  purgeCentral() {
    console.log('this.purgeCentral');
    this.snapshotSubscription = this.snapshotService.oneSnapshotSubject.subscribe(
      (snapshot: any) => {
      }
    );
    this.snapshotService.purgeCentralById(this.id_application);
  }

}
