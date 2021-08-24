import { Component } from '@angular/core';

@Component({
  selector: 'app-charts-individuals',
  templateUrl: './charts-individuals.component.html',
  styleUrls: ['./charts-individuals.component.css']
})
export class ChartsIndividualsComponent {

  public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels:string[] = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'];
  public barChartType:string = 'bar';
  public barChartLegend:boolean = true;
 
  public barChartData:any[] = [
    {data: [10, 25, 26, 25, 20, 21], label: 'Eva Ramos'},
    {data: [11, 26, 27, 19, 29, 35], label: 'Evelin Pabon'},
    {data: [12, 15, 1, 9, 12, 27], label: 'Rafael Obregon'},
    {data: [18, 40, 10, 10, 33, 27], label: 'Carlos Garcia'},
    {data: [15, 22, 8, 1, 10, 27], label: 'Roxenis Sanoja'},
    {data: [17, 5, 12, 0, 25, 2], label: 'David Quiroz'}
  ];
 
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }
 
  public randomize():void {
    // Only Change 3 values
    let data = [
      Math.round(Math.random() * 100),
      59,
      80,
      (Math.random() * 100),
      56,
      (Math.random() * 100),
      40];
    let clone = JSON.parse(JSON.stringify(this.barChartData));
    clone[0].data = data;
    this.barChartData = clone;
    /**
     * (My guess), for Angular to recognize the change in the dataset
     * it has to change the dataset variable directly,
     * so one way around it, is to clone the data, change it and then
     * assign it;
     */
  }

  public lineChartColors:Array<any> = [
    { // grey
      backgroundColor: 'rgba(0, 0, 0, 0.4)',
      borderColor: 'black',
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
    { // blue
      backgroundColor: 'rgba(52, 78, 178, 0.4)',
      borderColor: '#023C9A',
      pointBackgroundColor: '#83B0FA',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: '#023C9A'
    },
    { // Red
      backgroundColor: 'rgba(153, 0, 59, 0.4)',
      borderColor: '#900C3F',
      pointBackgroundColor: '#83B0FA',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: '#900C3F'
    },
    { // Green
      backgroundColor: 'rgba(112, 135, 44, 0.9)',
      borderColor: '#196F3D',
      pointBackgroundColor: '#83B0FA',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: '#196F3D'
    },
    { // Yellow
      backgroundColor: 'rgba(255, 255, 0, 0.5)',
      borderColor: '#FFC300',
      pointBackgroundColor: '#83B0FA',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: '#FFC300'
    }
  ];

}
