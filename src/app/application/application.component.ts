import { Component, OnInit, Input } from '@angular/core';
/* OBSOLETE TO DELETE */ 
@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.scss']
})
export class ApplicationComponent implements OnInit {

  @Input() central_base: String;
  @Input() name: String;
  @Input() last_version_analyzed: String;
  @Input() last_update: String;
  @Input() date_snapshot: String;
  @Input() cast_version: String;
  @Input() server_name: String;
  @Input() techno: String;
  @Input() id: number;
  @Input() indexOfApplication: number;


  constructor() {
  }

  ngOnInit(): void {
    
  }

  getColor(){
  	return 'green';
  }

  isJEE(){
    const position = this.techno.indexOf('JEE');
    if( position > 0) {
      return true;
    } else {
      return false;
    }

  }

}
