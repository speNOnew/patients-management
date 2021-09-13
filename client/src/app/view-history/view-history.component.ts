import { Component, OnInit } from '@angular/core';
import { Patient } from '../interfaces/patient';
import { Consult } from '../interfaces/consult';
import { IniHisService } from '../services/ini-his.service';
import { ConsultsService } from '../services/consults.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-history',
  templateUrl: './view-history.component.html',
  styleUrls: ['./view-history.component.css']
})
export class ViewHistoryComponent implements OnInit {

  dato: Patient = 
  {
    ci: null,
  	name: null,
    name2: null,
  	last_name: null,
    last_name2: null,
  	sexo: null,
  	state: null,
  	date_birth: null,
  	direction: null,
  	phone: null,
  	email: null,

  	allergies: null,
  	diseases: null,
  	surgerys: null,
  	parient: null,
  	disease: null
  }

  id: any;
  editing: boolean = false;
  datos: Patient[];

  consults: Consult[];

  constructor(private consultServices: ConsultsService, private inihisServices: IniHisService, private activatedRoute: ActivatedRoute) 
  { 

    this.getConsult();
    
    this.id = this.activatedRoute.snapshot.params['id'];

    if (this.id)
    {
      this.editing = true;
      this.inihisServices.get().subscribe
      (
        (data: Patient[]) =>
        {
          this.datos = data;
          this.dato = this.datos.find((n) => { return n.id == this.id});
          console.log(this.dato);
        },
        (error) =>
        {
          console.log(error);
        }
      );
    }
    else
    {
      this.editing = false;
    }

  }

  ngOnInit() {
  }

  getConsult()
  {
    this.consultServices.get().subscribe(
      (data: Consult[]) =>
      {
        this.consults = data;
      },
      (error) =>
      {
        console.log();
        alert('Error en la consulta');
      }
    ); 
  }

  saveInihis()
  {  	
    if (this.editing) 
    {
      this.inihisServices.put(this.dato).subscribe(
      (data) => 
        { 
          alert('Historia actualizada'); 
          console.log(data);
          window.history.back();
        }, 
      (error) => 
        {
          console.log(error);
          alert('Ocurrió un error');
        });
    }
    else
    {
      this.inihisServices.save(this.dato).subscribe(
      (data) => 
        { 
          alert('Historia guardada'); 
          console.log(data);
          window.history.back();
        }, 
      (error) => 
        {
          console.log(error);
          alert('Ocurrió un error');
      });
    }  	
  }

  goBack()
  {
    window.history.back();
  }

}
