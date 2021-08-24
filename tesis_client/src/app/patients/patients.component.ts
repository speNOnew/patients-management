import { Component, OnInit } from '@angular/core';
import { IniHisService } from '../services/ini-his.service';
import { Patient } from '../interfaces/patient';
import { FilterpatientPipe } from '../pipes/filterpatient.pipe';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent implements OnInit {

  // query:string = '';
  date = new Date();
  dia = this.date.getDate();
  mes = this.date.getMonth() + 1;
  anho = this.date.getFullYear();
  fecha = this.anho + '-' + this.mes + '-' + this.dia;

  patients: Patient[];

  constructor(private iniHisService: IniHisService) 
  {
    this.getPatient();
  }

  getPatient()
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

  ngOnInit() { }

}
