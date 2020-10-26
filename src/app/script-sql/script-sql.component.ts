import { Component, OnInit } from '@angular/core';
import { ApplicationService } from '../services/application.service';

@Component({
  selector: 'app-script-sql',
  templateUrl: './script-sql.component.html',
  styleUrls: ['./script-sql.component.scss']
})
export class ScriptSQLComponent implements OnInit {

  constructor(private applicationService: ApplicationService) { }

  ngOnInit(): void {
    this.applicationService.setApplicationMenu(null);
  }

}
