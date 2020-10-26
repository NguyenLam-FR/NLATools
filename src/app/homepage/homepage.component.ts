import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { RefRulesService } from '../services/ref-rules.service';
import * as HighCharts from 'highcharts';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  rulesDetailSubscription: Subscription;
  rulesDetail: any[];

  libelleAbscisseNbAppByVersionAIP: string[] = [];
  nbAppByVersionAIPOrdonnee: any[] = [];


  constructor(private refRulesService: RefRulesService) { }

  ngOnInit(): void {
    this.rulesDetailSubscription = this.refRulesService.rulePerToolSubject.subscribe(
      (rulesDetail: any[]) => {        
        this.rulesDetail = rulesDetail;
        this.computeYAxisNbAppByVersionAIP();
        this.graphColumnNbAppByVersionAIP();

      }
    );
    this.refRulesService.getRulesPerToolAgg();
  }


  computeYAxisNbAppByVersionAIP(){
    let i = 0;
    for(var rule of this.rulesDetail){
      const pointcss = {
 	      name: rule.id_outil,
	      y: rule.nbrule
      }
      this.nbAppByVersionAIPOrdonnee.push(pointcss);
      this.libelleAbscisseNbAppByVersionAIP.push(rule.id_outil);

    }
    console.log(this.nbAppByVersionAIPOrdonnee);
  }

  graphColumnNbAppByVersionAIP(){
    HighCharts.chart({
      chart: {  
        renderTo: 'columnNbRulePerTool',
        type: 'bar'},
        exporting: {  enabled: false },
      title: {  	text: ''},
      subtitle: { text: ''},
      xAxis: {  	categories: ['Cast', 'CheckmarX', 'SonarQube'],
        title: {	text: null }},
      yAxis: {    
        min: 0,
        title: {  text: 'nb règles',
                  align: 'high'},
        labels: { overflow: 'justify' }
      },
      tooltip: {  valueSuffix: ' '},
      plotOptions: { bar: { dataLabels: { enabled: true} } },
      legend: {     enabled: false },
      credits: {  enabled: false},
      series: [{
        name: 'utilise',
        type: undefined,
        data: this.nbAppByVersionAIPOrdonnee
      }]
    });
  }
}
