import { Component, OnInit } from '@angular/core';
import { IniHisService } from '../services/ini-his.service';
import { Patient } from '../interfaces/patient';

@Component({
  selector: 'app-historys',
  templateUrl: './historys.component.html',
  styleUrls: ['./historys.component.css']
})
export class HistorysComponent implements OnInit {

  patients: Patient[];

  constructor(private iniHisService: IniHisService) 
  {
    this.getPatients();
  }

  getPatients()
  {
  	this.iniHisService.get().subscribe(
      (data: Patient[]) =>
    	{
        this.patients = data;
    	},
      (error) =>
      {
        console.log();
        alert('Error en la consulta');
      }
    ); 
  }

  getSearch()
  {
    this.patients
  }

  ngOnInit() { }

}
