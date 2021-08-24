import { Component, OnInit } from '@angular/core';
import { Patient } from '../interfaces/patient';
import { IniHisService } from '../services/ini-his.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ini-his',
  templateUrl: './ini-his.component.html',
  styleUrls: ['./ini-his.component.css']
})
export class IniHisComponent implements OnInit {

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
	disease: null,
  }

  id: any;
  editing: boolean = false;
  datos: Patient[];

  constructor(private inihisServices: IniHisService, private activatedRoute: ActivatedRoute) 
  { 
    
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

  saveInihis()
  {  	
    if (this.editing) 
    {
      this.inihisServices.put(this.dato).subscribe(
      (data) => 
        { 
          alert('Los datos del paciente han sido actualizados'); 
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
          alert('Datos guardados'); 
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

}
