import { Component, Inject,  OnInit, Input } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { SingleRulesListComponent } from '../single-rules-list/single-rules-list.component';
import { FormControl, Validators} from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';
import { SnapshotService } from '../services/snapshot.service';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';



export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-single-application-action-plan-snapshot',
  templateUrl: './single-application-action-plan-snapshot.component.html',
  styleUrls: ['./single-application-action-plan-snapshot.component.scss']
})
export class SingleApplicationActionPlanSnapshotComponent implements OnInit {

  snapshotSubscription: Subscription;
  panelOpenState = false;
  commentaireInput = new FormControl('', [Validators.required]);
  
  @Input() last_version_analyzed: String;
  @Input() etat_workflow: String;
  @Input() date_snapshot: String;
  @Input() nb_total: Number;
  @Input() nb_totalHTML: String;
  @Input() nb_corrected: Number;
  @Input() nb_correctedHTML: String;
  @Input() nb_new: Number;
  @Input() nb_newHTML: String;
  @Input() obj_deleted: Number;
  @Input() obj_deletedHTML: String;
  @Input() exclusion_orphelin: Number;
  @Input() exclusion_orphelinHTML: String;
  @Input() nb_orphelin: Number;
  @Input() nb_orphelinHTML: String;
  @Input() loc: Number;
  @Input() couleurFond: String;
  @Input() id_snapshot_cast: Number;
  @Input() cast_version: String;
  @Input() last_update: String;
  @Input() plan_action_orphelin: Number;
  @Input() plan_action_orphelinHTML: String;
  
  
  @Input() id_snapshot: Number;
  @Input() id_app: Number;
  @Input() nb_still_violation: Number;
  @Input() nb_still_violationHTML: String;
  @Input() indexOfApplication: number;
  @Input() comment: String;

  constructor(public dialog: MatDialog, private snapshotService: SnapshotService) { }

  ngOnInit(): void {
    if(this.comment===null){
      this.hidden = true;
    } else {
      this.commentaireInput.setValue(this.comment);
    }
    if(this.nb_corrected === 0){
      this.hiddenCorrected = true;
      this.nb_correctedHTML = '-';
    } else {
      this.nb_correctedHTML = this.nb_corrected.toString();
    }
    if(this.nb_orphelin === 0){
      this.nb_orphelinHTML = '-';
    } else {
      this.nb_orphelinHTML = this.nb_orphelin.toString();
    }
    if(this.plan_action_orphelin === 0){
      this.plan_action_orphelinHTML = '-';
    } else {
      this.plan_action_orphelinHTML = this.plan_action_orphelin.toString();
    }
    if(this.exclusion_orphelin === 0){
      this.exclusion_orphelinHTML = '-';
    } else {
      this.exclusion_orphelinHTML = this.exclusion_orphelin.toString();
    }
    if(this.obj_deleted === 0){
      this.obj_deletedHTML = '-';
    } else {
      this.obj_deletedHTML = this.obj_deleted.toString();
    }
    if(this.nb_new === 0){
      this.hiddenNew = true;
      this.nb_newHTML = '-';
    } else {
      this.nb_newHTML = this.nb_new.toString();
    }
    if(this.nb_still_violation === 0){
      this.hiddenStillViolation = true;
      this.nb_still_violationHTML = '-';
    } else {
      this.nb_still_violationHTML = this.nb_still_violation.toString();
    }
    if(this.nb_total === 0){
      this.hiddenTotal = true;
      this.nb_totalHTML = '-';
    } else {
      this.nb_totalHTML = this.nb_total.toString();
    }


  }
//[ngClass]="onSwitchComment()"
  onSwitchComment(){
    if( this.hidden === true ){
      return 'affichecommentaire';
    }
    return '';
  }

  changement() {
   const snapshot = 
    {
      id: this.id_snapshot,
      comment: this.commentaireInput.value
    };

    this.snapshotSubscription = this.snapshotService.oneSnapshotSubject.subscribe(
      (snapshot: any) => {
        //this.snapshotsHTML = snapshot;
        this.hidden =false;
        this.comment = this.commentaireInput.value;
        console.log('changement effectué, this.commentaireInput.value='+this.commentaireInput.value);
//        this.commentaireInput.setValue();
        //this.snapshotService.emitOneSnapshotSubject();
      }
    );
    this.snapshotService.saveCommentForSnapshot(snapshot);
  }

  deleteComment() {
    const snapshot = 
    {
      id: this.id_snapshot,
      comment: null
    };

    this.snapshotSubscription = this.snapshotService.forDeleteSnapshotSubject.subscribe(
      (snapshot: any) => {
        //this.snapshotsHTML = snapshot;
       this.hidden = true;
       this.commentaireInput.setValue('');
       this.comment = null;
      }
    );
    this.snapshotService.deleteCommentForSnapshot(snapshot);
  }


  hidden = false;
  hiddenCorrected = false;
  hiddenNew = false;
  hiddenStillViolation = false;
  hiddenTotal = false;
  

  openDialog(idApp: Number, idSnapshot: Number, apStatus: String): void {
    const dialogRef = this.dialog.open(SingleRulesListComponent, {
      width: '80%',
      data: {idApp: idApp, idSnapshot: idSnapshot, apStatus: apStatus}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
     // this.animal = result;
    });
  } 

  openDialogDeleteSnapshot(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '650px',
      data: {
        id_snapshot: this.id_snapshot,
        last_version_analyzed: this.last_version_analyzed,
        date_snapshot: this.date_snapshot  
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      //this.animal = result;
    });
  }

 
}

export interface DialogData {
  id_snapshot: number;
  last_version_analyzed: string;
  date_snapshot: string
}

@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'popupDeleteForeverSnapshotConfirm.html',
})
export class DialogOverviewExampleDialog implements OnInit {

  snapshotSubscription: Subscription;
  id_snapshot = 0;
  last_version_analyzed = '';
  date_snapshot = '';

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    public dialog: MatDialog,
    private snapshotService: SnapshotService) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
    this.id_snapshot = this.data.id_snapshot;
    this.last_version_analyzed = this.data.last_version_analyzed;
    this.date_snapshot = this.data.date_snapshot;
  }

  deleteSnapshotForever() {
    console.log('this.deleteSnapshotForever');
    this.snapshotSubscription = this.snapshotService.oneSnapshotSubject.subscribe(
      (snapshot: any) => {
      }
    );
    this.snapshotService.deleteForeverSnapshotById(this.data.id_snapshot);
  }

}