import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, BaseChartDirective, Label } from 'ng2-charts';
import * as pluginAnnotations from 'chartjs-plugin-annotation';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {

  constructor() { }

  public doughnutChartLabels = ['Sales Q1', 'Sales Q2', 'Sales Q3', 'Sales Q4'];
  public doughnutChartData = [120, 150, 180, 90];
  public doughnutChartType = 'doughnut';

  public polarAreaChartLabels = ['Dormnent User', 'Live Users', 'Active Users', 'Subscribed User'];
  public polarAreaChartData = [300, 500, 100, 40];
  public polarAreaLegend = true;
  public polarAreaChartType = 'polarArea';

  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartData = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'}
  ];





 public lineChartData = [
    { data: [65, 59, 80, 81, 56, 55], label: 'APPL' },
    { data: [28, 48, 40, 19, 86, 27], label: 'GOOG' },
    { data: [180, 480, 770, 90, 1000, 270], label: '^FTSE', yAxisID: 'y-axis-1' }
  ];
  public lineChartLabels = ['January', 'February', 'March', 'April', 'May', 'June'];
  public lineChartOptions = {
    responsive: true,
    scales: {
      // We use this empty structure as a placeholder for dynamic theming.
      xAxes: [{}],
      yAxes: [
        {
          id: 'y-axis-0',
          position: 'left',
        },
        {
          id: 'y-axis-1',
          position: 'right',
          gridLines: {
            color: 'rgba(255,0,0,0.3)',
          },
          ticks: {
            fontColor: 'red',
          }
        }
      ]
    },
    annotation: {
      annotations: [
        {
          type: 'line',
          mode: 'vertical',
          scaleID: 'x-axis-0',
          value: 'March',
          borderColor: 'orange',
          borderWidth: 2,
          label: {
            enabled: true,
            fontColor: 'orange',
            content: 'LineAnno'
          }
        },
      ],
    },
  };
  public lineChartColors = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    { // red
      backgroundColor: 'rgba(255,0,0,0.3)',
      borderColor: 'red',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  public lineChartLegend = true;
  public lineChartType = 'line';
  public lineChartPlugins = [pluginAnnotations];

  @ViewChild(BaseChartDirective) chart: BaseChartDirective;



  public news = [
  {
    "item_id": "1",
    "name": "Fear & Greed Trader",
    "description": "S&P 500 Weekly Update: The Most Hated Bull Market Continues With New Highs",
    "icon": "https://material.angular.io/assets/img/examples/shiba1.jpg",
    "created" : "07/13/2016 11:05 AM"
  },{
    "item_id": "2",
    "name": "Mike van Dulken",
    "description": "Scoop identifies news that WorldPay may merge with JPMorgan Merge or Vantiv",
    "icon": "https://material.angular.io/assets/img/examples/shiba2.jpg",
    "created" : "07/01/2016 03:41 PM"
  },{
    "item_id": "3",
    "name": "Bowdeya Tweh",
    "description": "Scoop identifies the JPMorgan deal is off and that they will instead merge with Vantiv.",
    "icon": "https://material.angular.io/assets/img/examples/shiba1.jpg",
    "created" : "06/15/2016 09:02 AM"
  },{
    "item_id": "1",
    "name": "Fear & Greed Trader",
    "description": "S&P 500 Weekly Update: The Most Hated Bull Market Continues With New Highs",
    "icon": "https://material.angular.io/assets/img/examples/shiba2.jpg",
    "created" : "07/13/2016 11:05 AM"
  },{
    "item_id": "2",
    "name": "Mike van Dulken",
    "description": "Scoop identifies news that WorldPay may merge with JPMorgan Merge or Vantiv",
    "icon": "https://material.angular.io/assets/img/examples/shiba1.jpg",
    "created" : "07/01/2016 03:41 PM"
  },{
    "item_id": "3",
    "name": "Bowdeya Tweh",
    "description": "Scoop identifies the JPMorgan deal is off and that they will instead merge with Vantiv.",
    "icon": "https://material.angular.io/assets/img/examples/shiba2.jpg",
    "created" : "06/15/2016 09:02 AM"
  },{
    "item_id": "1",
    "name": "Fear & Greed Trader",
    "description": "S&P 500 Weekly Update: The Most Hated Bull Market Continues With New Highs",
    "icon": "https://material.angular.io/assets/img/examples/shiba1.jpg",
    "created" : "07/13/2016 11:05 AM"
  },{
    "item_id": "2",
    "name": "Mike van Dulken",
    "description": "Scoop identifies news that WorldPay may merge with JPMorgan Merge or Vantiv",
    "icon": "https://material.angular.io/assets/img/examples/shiba2.jpg",
    "created" : "07/01/2016 03:41 PM"
  },{
    "item_id": "3",
    "name": "Bowdeya Tweh",
    "description": "Scoop identifies the JPMorgan deal is off and that they will instead merge with Vantiv.",
    "icon": "https://material.angular.io/assets/img/examples/shiba1.jpg",
    "created" : "06/15/2016 09:02 AM"
  },
  {
    "item_id": "1",
    "name": "Fear & Greed Trader",
    "description": "S&P 500 Weekly Update: The Most Hated Bull Market Continues With New Highs",
    "icon": "https://material.angular.io/assets/img/examples/shiba2.jpg",
    "created" : "07/13/2016 11:05 AM"
  },{
    "item_id": "2",
    "name": "Mike van Dulken",
    "description": "Scoop identifies news that WorldPay may merge with JPMorgan Merge or Vantiv",
    "icon": "https://material.angular.io/assets/img/examples/shiba1.jpg",
    "created" : "07/01/2016 03:41 PM"
  },{
    "item_id": "3",
    "name": "Bowdeya Tweh",
    "description": "Scoop identifies the JPMorgan deal is off and that they will instead merge with Vantiv.",
    "icon": "https://material.angular.io/assets/img/examples/shiba2.jpg",
    "created" : "06/15/2016 09:02 AM"
  },
  {
    "item_id": "1",
    "name": "Fear & Greed Trader",
    "description": "S&P 500 Weekly Update: The Most Hated Bull Market Continues With New Highs",
    "icon": "https://material.angular.io/assets/img/examples/shiba1.jpg",
    "created" : "07/13/2016 11:05 AM"
  },{
    "item_id": "2",
    "name": "Mike van Dulken",
    "description": "Scoop identifies news that WorldPay may merge with JPMorgan Merge or Vantiv",
    "icon": "https://material.angular.io/assets/img/examples/shiba2.jpg",
    "created" : "07/01/2016 03:41 PM"
  }
]




  ngOnInit() {
  }



 // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

}
