import { Component, OnInit } from '@angular/core';
import { ApplicationService } from '../services/application.service';

@Component({
  selector: 'app-nomenclature',
  templateUrl: './nomenclature.component.html',
  styleUrls: ['./nomenclature.component.scss']
})
export class NomenclatureComponent implements OnInit {

  constructor(private applicationService: ApplicationService) { }

  ngOnInit(): void {
    this.applicationService.setApplicationMenu(null);

  }

}
