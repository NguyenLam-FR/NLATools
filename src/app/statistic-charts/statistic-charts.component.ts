import { Component, OnInit, ViewChild } from '@angular/core';
import * as HighCharts from 'highcharts';
import { DatePipe } from '@angular/common';
import { formatDate } from '@angular/common';
import { ApplicationService } from '../services/application.service';
import { registerLocaleData } from '@angular/common';
import { Subscription } from 'rxjs/Subscription';
import localeFR from "@angular/common/locales/fr";
import { ServerCssService } from '../services/server-css.service';
registerLocaleData(localeFR, "fr");

import { MatSort} from '@angular/material/sort';
import { MatTableDataSource} from '@angular/material/table';
import { MatPaginator} from '@angular/material/paginator';

export interface appByTechnoInterface {
  techno: string,
  nb: number;
  name: string;
}

const ELEMENT_DATA: appByTechnoInterface[] = [
  {techno: 'JEE', nb: 123, name: 'App1, App2'},
  {techno: 'SQL', nb: 50, name: 'app3, app4'},
  {techno: 'NET', nb: 80, name: 'app5, app6'},
];

 
@Component({
  selector: 'app-statistic-charts',
  templateUrl: './statistic-charts.component.html',
  styleUrls: ['./statistic-charts.component.scss']
})

export class StatisticChartsComponent implements OnInit {
  displayedColumns: string[] = ['techno', 'nb', 'name'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;


  serverCssList: any[];
  serverCssSubscription: Subscription;
  serverCssOrdonnee: any[] = [];
  
  appsByTechno: any[];
  appsByTechnoSubscription: Subscription;
  appsByTechnoOrdonnee: any[] = [];

  appByYear: any[];
  statAppByYearSubscription: Subscription;

  nbAppByVersionAIP: any[];
  nbAppByVersionAIPSubscription: Subscription;
  nbAppByVersionAIPOrdonnee: any[] = [];
  libelleAbscisseNbAppByVersionAIP: string[] = [];

  libelleAbscisse: string[] = [];
  locOrdonnee: any[] = [];
  nbApplicationByMonth: any[] = [];
    
  constructor(private applicationService: ApplicationService, private serverCssService: ServerCssService) { }

  ngOnInit(): void {
    this.statAppByYearSubscription = this.applicationService.statAppByYearSubject.subscribe(
      (statAppByYear: any[]) => {
        this.appByYear = statAppByYear;
        console.log(this.appByYear);
        this.computeYAxis();
        this.graphColumnChartAppByYear();
        this.graphColumnNbAppByMonth();
      }        
      
    );
    this.applicationService.getStatAppByYearREST(36);
    this.applicationService.setApplicationMenu(null);
  
    this.serverCssSubscription = this.serverCssService.serverSubject.subscribe(
      (servers: any[]) => {
        this.serverCssList = servers;
       // console.log(this.serverCssList);
        this.computeYAxisServerCss();
        this.graphPieNbAppByServer();
      }        
      
    );
    this.serverCssService.getServerCss();

    this.appsByTechnoSubscription = this.applicationService.appsByTechnoSubject.subscribe(
      (appsByTechno: any[]) => {
        this.appsByTechno = appsByTechno;
        this.computeYAxisTechno();
        this.graphPieNbAppByTechno();
        
        this.dataSource = new MatTableDataSource(appsByTechno);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      }        
      
    );
    this.applicationService.getAppsByTechno();

    this.nbAppByVersionAIPSubscription = this.applicationService.nbAppByVersionAIPSubject.subscribe(
      (nbAppByVersionAIP: any[]) => {
        this.nbAppByVersionAIP = nbAppByVersionAIP;
        console.log(this.nbAppByVersionAIP);
        this.computeYAxisNbAppByVersionAIP();
        this.graphColumnNbAppByVersionAIP();
      }        
      
    );
    this.applicationService.getNbAppByVersionAIP();
  
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  computeYAxisNbAppByVersionAIP(){
    let i = 0;
    for(var nbApp of this.nbAppByVersionAIP){
      const pointcss = {
 	      name: nbApp.version,
	      y: nbApp.nb
      }
      this.nbAppByVersionAIPOrdonnee.push(pointcss);
      this.libelleAbscisseNbAppByVersionAIP.push(nbApp.version);

    }
    console.log(this.nbAppByVersionAIPOrdonnee);
  }

  computeYAxisTechno(){
    let i = 0;
    for(var techno of this.appsByTechno){
      const pointcss = {
 	      name: techno.techno,
	      y: techno.nb
      }
      if( techno.techno != 'SQL'){
        this.appsByTechnoOrdonnee.push(pointcss);
      }
    }
    console.log(this.appsByTechnoOrdonnee);
  }

  computeYAxisServerCss(){
    let i = 0;
    for(var servercss of this.serverCssList){
      const pointcss = {
 	      name: servercss.server_name,
	      y: servercss.nb
      }
      this.serverCssOrdonnee.push(pointcss);
    }
    console.log(this.serverCssOrdonnee);
  }

  computeYAxis() {
    let date: Date = new Date(); 
    
    date.setMonth(date.getMonth() - 12); 

    for (let i = 0; i < 12; i++) {
      date.setMonth(date.getMonth() + 1); 
      const mois = formatDate(date, 'MMM-yy', 'fr-FR');
      const moisYYYmm = formatDate(date, 'yyyy-MM', 'fr-FR');
      this.libelleAbscisse.push(mois);


      let nbAppcalcul = 0;
      let abscisse = 0;
      let names = '';
    //  console.log(moisYYYmm);
      for (var snapshot of this.appByYear) {
        if(moisYYYmm === snapshot.abscisse){
          abscisse = abscisse + snapshot.loc;
          nbAppcalcul = nbAppcalcul + 1;
          names = names + "," + snapshot.name;
        }
      }
     // const ordonnee = "{y:20, name: 'APP', nbApp: 3}";
      const pointapp = {
        name: names,
        y: abscisse,
        nbApp: nbAppcalcul
      }
      this.locOrdonnee.push(pointapp);
      const pointapp2 = {
        name: names,
        y: nbAppcalcul
      }
      this.nbApplicationByMonth.push(pointapp2);
    }    

  //  console.log(this.locOrdonnee);
  }
  graphColumnNbAppByVersionAIP(){
    HighCharts.chart({
      chart: {  
        renderTo: 'columnNbAppByVersionAIP',
        type: 'column'},
      title: {  text: ''},
      xAxis: {  categories: this.libelleAbscisseNbAppByVersionAIP},
      yAxis: {
        min: 0,
        title: {  text: 'Loc analysées' },
        stackLabels: {
          enabled: true,
          style: {
            fontWeight: 'bold',
            color: 'gray'
          }
        }
      },
      exporting: {  enabled: false},
      legend: {     enabled: false},
      credits: {    enabled: false},
      tooltip: {
        headerFormat: '<b>{point.x}</b><br/>',
        pointFormat: '{point.name}<br/>Nb App: {point.nbApp}'
      },
      plotOptions: {
        column: {
          stacking: 'normal',
          dataLabels: {
              enabled: false
          }
        }
      },
      series: [{
        name: 'LoC',
        type: undefined,
        data: this.nbAppByVersionAIPOrdonnee
      }]
    });
  }


  graphColumnChartAppByYear() {   
    HighCharts.chart({
      chart: {  
        renderTo: 'columnChartAppByYear',
        type: 'column'},
      title: {  text: ''},
      xAxis: {  categories: this.libelleAbscisse},
      yAxis: {
        min: 0,
        title: {  text: 'Loc analysées' },
        stackLabels: {
          enabled: true,
          style: {
            fontWeight: 'bold',
            color: 'gray'
          }
        }
      },
      exporting: {  enabled: false},
      legend: {     enabled: false},
      credits: {    enabled: false},
      tooltip: {
        headerFormat: '<b>{point.x}</b><br/>',
        pointFormat: '{point.name}<br/>Nb App: {point.nbApp}'
      },
      plotOptions: {
        column: {
          stacking: 'normal',
          dataLabels: {
              enabled: false
          }
        }
      },
      series: [{
        name: 'LoC',
        type: undefined,
        data: this.locOrdonnee
      }]
    });
  }
  

  graphColumnNbAppByMonth() {
    HighCharts.chart({
      chart: {
        renderTo: 'columnNbAppByMonth',
        type: 'column'
      },
      title: {       text: ''},
      exporting: {   enabled: false},
      legend: {      enabled: false},
      credits: {     enabled: false},
      xAxis: {
        categories: this.libelleAbscisse,
      },




      yAxis: {
        min: 0,
        title: {
          text: 'Nb app. réalisées'
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
            click: function (event) {  }
          }
        }
      },
      series: [{
        name: 'nb apps',
        type: undefined,
        data: this.nbApplicationByMonth
      }]
    });
  }

  graphPieNbAppByServer() {
    HighCharts.chart({
      chart: {
        renderTo: 'pieNbAppByServer',
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
      },

      title: {    text: ''},
      tooltip: {  pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'},
      exporting: {enabled: false},
      legend: {   enabled: false},
      credits: {  enabled: false},
      plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: true,
                distance: -40,
                format: '<b>{point.name}</b><br>Nb app.: {point.y}<br>{point.percentage:.1f} %',
                style: {
                    color:  'black'
                },
                connectorColor: 'silver'
            }
        }
    },
    series: [{
      name: 'Nb app',
      type: undefined,
      data: this.serverCssOrdonnee
    }]
  });
  }


  graphPieNbAppByTechno() {
    HighCharts.chart({
      chart: {
        renderTo: 'pieNbAppByTechno',
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
      },

      title: {    text: ''},
      tooltip: {  pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'},
      exporting: {enabled: false},
      legend: {   enabled: false},
      credits: {  enabled: false},
      plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: true,
                distance: -40,
                format: '<b>{point.name}</b><br>Nb app.: {point.y}<br>{point.percentage:.1f} %',
                style: {
                    color:  'black'
                },
                connectorColor: 'silver'
            }
        }
    },
    series: [{
      name: 'Nb app',
      type: undefined,
      data: this.appsByTechnoOrdonnee
    }]
  });
  }
}

