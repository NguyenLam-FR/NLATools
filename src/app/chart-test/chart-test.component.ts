import { Component, OnInit } from '@angular/core';
import * as HighCharts from 'highcharts';

@Component({
  selector: 'app-chart-test',
  templateUrl: './chart-test.component.html',
  styleUrls: ['./chart-test.component.scss']
})
export class ChartTestComponent implements OnInit {

  HeatmapObject: Highcharts.Chart = null;
  title = 'Angular 9 HighCharts';
  constructor() { }

  ngOnInit() {
    this.columnChartPopulation();
    this.barChartPopulation();
    this.pieChartBrowser();

    let options = this.HeatmapOptions();
    HighCharts.chart(options);
  }
  

  HeatmapOptions(): Highcharts.Options {

    let options: Highcharts.Options = {

      chart: {
        renderTo: 'heatmap-object',
        type: 'column'
      },
      title: {
        text: ''
      },
      exporting: {
        enabled: false
      },
      legend: {
        enabled: false
      },
      credits: {
        enabled: false
      },

      xAxis: {
		    labels: {
          style: {  fontSize: '9px'	}
				},
        categories: ['Africa', 'America', 'Asia', 'Europe', 'Oceania'],
      },

      yAxis: {
        min: -500,
            max: 5000,
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
        type: 'column',
        name: 'Corrected',
        color: '#01DF01',
        data: [107, 31, 635, 203, 2]
    }
      , {
        type: 'column',
        name: 'Deleted',
			  color: '#006600',
        data: [133, 156, 947, 408, 6]
      }, {
        type: 'column',
        name: 'New',
			  color: '#A4A4A4',
        data: [814, 841, 3714, 727, 31]
      }, {
        type: 'column',
        name: 'Still Violation',
				color: '#DF0101',
        data: [1216, 1001, 4436, 738, 40]
      }]

    }
    
    return options;
  }

  columnChartPopulation() {
    HighCharts.chart({
      chart: {
        renderTo: 'columnChartTest2',
        type: 'column'
      },
      title: {
        text: ''
      },
      exporting: {
        enabled: false
      },
      legend: {
        enabled: false
      },
      credits: {
        enabled: false
      },

      xAxis: {
		    labels: {
          style: {  fontSize: '9px'	}
				},
        categories: ['Africa', 'America', 'Asia', 'Europe', 'Oceania'],
      },

      yAxis: {
        min: -500,
            max: 5000,
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
        data: [107, 31, 635, 203, 2]
    }
      , {
        name: 'Deleted',
      color: '#006600',
      type: undefined,
        data: [[133], [156], [947], [408], [6]]
      }, {
        name: 'New',
      color: '#A4A4A4',
      type: undefined,
        data: [814, 841, 3714, 727, 31]
      }, {
        name: 'Still Violation',
            color: '#DF0101',
            type: undefined,
        data: [1216, 1001, 4436, 738, 40]
      }]
    });
  }

  barChartPopulation() {
    HighCharts.chart('barChart', {
      chart: {
        type: 'bar'
      },
      title: {
        text: 'Historic World Population by Region'
      },
      xAxis: {
        categories: ['Africa', 'America', 'Asia', 'Europe', 'Oceania'],
      },
      yAxis: {
        min: 0,
        title: {
          text: 'Population (millions)',
          align: 'high'
        },
      },
      tooltip: {
        valueSuffix: ' millions'
      },
      plotOptions: {
        bar: {
          dataLabels: {
            enabled: true
          }
        }
      },
      series: [{
        type: undefined,
        name: 'Year 1800',
        data: [107, 31, 635, 203, 2]
      }, {
        type: undefined,
        name: 'Year 1900',
        data: [133, 156, 947, 408, 6]
      }, {
        type: undefined,
        name: 'Year 2000',
        data: [814, 841, 3714, 727, 31]
      }, {
        type: undefined,
        name: 'Year 2016',
        data: [1216, 1001, 4436, 738, 40]
      }]
    });
  }

  pieChartBrowser() {
    HighCharts.chart('pieChart', {
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
      },
      title: {
        text: 'Browser market shares in October, 2019'
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: true,
            format: '<b>{point.name}</b>: {point.percentage:.1f} %'
          }
        }
      },
      series: [{
        name: 'Brands',
        colorByPoint: true,
        type: undefined,
        data: [{
          name: 'Chrome',
          y: 61.41,
          sliced: true,
          selected: true
        }, {
          name: 'Internet Explorer',
          y: 11.84
        }, {
          name: 'Firefox',
          y: 10.85
        }, {
          name: 'Edge',
          y: 4.67
        }, {
          name: 'Safari',
          y: 4.18
        }, {
          name: 'Sogou Explorer',
          y: 1.64
        }, {
          name: 'Opera',
          y: 1.6
        }, {
          name: 'QQ',
          y: 1.2
        }, {
          name: 'Other',
          y: 2.61
        }]
      }]
    });
  }
}