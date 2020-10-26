import { Component, OnInit, Input } from '@angular/core';
import { ApplicationService } from '../services/application.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-application-sous-menu',
  templateUrl: './application-sous-menu.component.html',
  styleUrls: ['./application-sous-menu.component.scss']
})
export class ApplicationSousMenuComponent implements OnInit {

  @Input() name: any;
  @Input() isAvailable: true;
  @Input() id: any;

  applicationMenu: any;

  applicationMenuSujet: Subscription;

  constructor(private applicationService: ApplicationService) { }

  ngOnInit(): void {
    console.log("ApplicationSousMenuComponent.ngOnInit.debut");
	  this.applicationMenuSujet = this.applicationService.applicationMenuSubject.subscribe(
      (applicationMenu: any) => {
        if( applicationMenu != null) {
          this.name = applicationMenu.name;
          this.id = applicationMenu.id;
          console.log("ApplicationSousMenuComponent.ngOnInit.applicationMenu.name="+applicationMenu.name);
	      }
      }
    );
  }
  
  isDisplay(){
    if(this.applicationService.getApplicationMenu() == null){
      return false;
    } else {
      return true;
    }
  }
}

