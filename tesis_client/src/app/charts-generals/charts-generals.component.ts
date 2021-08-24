import { Component } from '@angular/core';

@Component({
  selector: 'app-charts-generals',
  templateUrl: './charts-generals.component.html',
  styleUrls: ['./charts-generals.component.css']
})
export class ChartsGeneralsComponent {

  // lineChart
  public lineChartData:Array<any> = [
    {data: [10, 25, 26, 25, 20, 21], label: 'Ginecología'},
    {data: [11, 26, 27, 19, 29, 35], label: 'Medicina general'},
    {data: [12, 15, 1, 9, 12, 27], label: 'Otorrinolaringología'},
    {data: [18, 40, 10, 10, 33, 27], label: 'Odontología'},
    {data: [15, 22, 8, 1, 10, 27], label: 'Oftalmología'},
    {data: [17, 5, 12, 0, 25, 2], label: 'Traumatología'}

  ];
  public lineChartLabels:Array<any> = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'];
  public lineChartOptions:any = {
    responsive: true
  };
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
  public lineChartLegend:boolean = true;
  public lineChartType:string = 'line';
 
  public randomize():void {
    let _lineChartData:Array<any> = new Array(this.lineChartData.length);
    for (let i = 0; i < this.lineChartData.length; i++) {
      _lineChartData[i] = {data: new Array(this.lineChartData[i].data.length), label: this.lineChartData[i].label};
      for (let j = 0; j < this.lineChartData[i].data.length; j++) {
        _lineChartData[i].data[j] = Math.floor((Math.random() * 100) + 1);
      }
    }
    this.lineChartData = _lineChartData;
  }
 
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }

}
