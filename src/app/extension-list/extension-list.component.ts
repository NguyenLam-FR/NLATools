import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { ExtensionService } from '../services/extension.service';
import { MatSort} from '@angular/material/sort';
import { ActivatedRoute } from '@angular/router';
import { MatTableDataSource} from '@angular/material/table';
import { MatPaginator} from '@angular/material/paginator';
import { ApplicationService } from '../services/application.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';


export interface extensionsByApp {
  name: string,
  extensions: number,
  greenOK: string,
  greenKO: string,
  php: string,
  jee: string,
  html5: string,
  sql: string
/*  ac_kit: string,
  tca_kit: string,
  tco_kit: string*/
}
 
const ELEMENT_DATA: extensionsByApp[] = [
  {name: 'premier', extensions: 123, greenOK: 'ok', greenKO: 'ok',php: 'OK',jee: 'OK',html5: 'OK',sql: 'ok'},
  {name: 'deuxieme', extensions: 123, greenOK: 'ok', greenKO: 'ok', php: 'KO',jee: 'OK',html5: 'OK', sql: 'ok'}
];


@Component({
  selector: 'app-extension-list',
  templateUrl: './extension-list.component.html',
  styleUrls: ['./extension-list.component.scss']
})
export class ExtensionListComponent implements OnInit {
  displayedColumns: string[] = ['name', 'extensions', 'greenOK', 'greenKO', 'php', 'jee', 'html5', 'sql'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  extensionsList: any[];
  extensionSubscription: Subscription;

  constructor(
    public dialog: MatDialog,
    private extensionService: ExtensionService,
    private applicationService: ApplicationService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.extensionSubscription = this.extensionService.extensionSubject.subscribe(
      (extensionList: any[]) => {
        this.extensionsList = extensionList;
        this.dataSource = new MatTableDataSource(this.extensionsList);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
        console.log(this.extensionsList);
      }        
      
    );
    this.extensionService.getExtensions();
    this.applicationService.setApplicationMenu(null);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  openDialog(idApp: Number): void {
   console.log("open popup avec l'ID APP="+idApp);
   const dialogRef = this.dialog.open(PopupExtensionListForApp, {
    width: '650px',
    data: {
      id_app: idApp
    //  last_version_analyzed: this.last_version_analyzed,
    //  date_snapshot: this.date_snapshot  
    }
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed');
    //this.animal = result;
  });
  } 
}



export interface DialogData {
  id_app: number;
}

export interface extensionsForApp {
  label: string,
  version: string
}
 
const ELEMENT_DATA_POPUP: extensionsForApp[] = [
  {label: 'premier', version: 'V1.2.3'},
  {label: 'deuxieme', version: 'V3.2.3'}
];

@Component({
  selector: 'popup-extension-details',
  templateUrl: 'popup-extension-details.html',
})
export class PopupExtensionListForApp implements OnInit {
  displayedColumns: string[] = ['label', 'version'];
  dataSource = new MatTableDataSource(ELEMENT_DATA_POPUP);

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  listeExtensionSubscription: Subscription;
  id_app = 0;


  constructor(
    public dialogRef: MatDialogRef<PopupExtensionListForApp>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private extensionService: ExtensionService,
    public dialog: MatDialog) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngOnInit(): void {
    this.id_app = this.data.id_app;

    this.listeExtensionSubscription = this.extensionService.extensionsListSubject.subscribe(
      (extensionList: any[]) => {
        this.dataSource = new MatTableDataSource(extensionList);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
        console.log('extension-list.components.ngOnInit' + extensionList);

        });       
    this.extensionService.getExtensionsByIdApp(this.data.id_app);
  }


}