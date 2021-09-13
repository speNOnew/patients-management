import { Component, OnInit } from '@angular/core';
import { CitesService } from '../services/cites.service';
import { Cite } from '../interfaces/cite';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-create-cites',
  templateUrl: './create-cites.component.html',
  styleUrls: ['./create-cites.component.css']
})
export class CreateCitesComponent implements OnInit {

  //Boton guardar

  disableChangeSaveButton = false;

  date = new Date();
  fecha: any; // String(this.date.getFullYear() + "-" + "0" + (this.date.getMonth() +1) + "-" + this.date.getDate());
  fecha1 = this.monthFunction();
  cite1: Cite = 
  {
  	date: null,
  	ci: null,
  	id_medico_id: null,
  	id_especialidad_id: null
  }

  id: any;
  editing: boolean = false;
  cites: Cite[];

  constructor(private citesServices: CitesService, private activatedRoute: ActivatedRoute) 
  { 
    
    // this.id = this.activatedRoute.snapshot.params['id'];

    // if (this.id)
    // {
    //   this.editing = true;
    //   this.citesServices.get().subscribe
    //   (
    //     (data: Cite[]) =>
    //     {
    //       this.cites = data;
    //       this.cite1 = this.cites.find((n) => { return n.id == this.id});
    //       console.log(this.cite1);
    //     },
    //     (error) =>
    //     {
    //       console.log(error);
    //     }
    //   );
    // }
    // else
    // {
    //   this.editing = false;
    // } <>

  }

  monthFunction()
  { 
    this.fecha = String(this.date.getFullYear() + "-" + (this.date.getMonth() +1) + "-" + this.date.getDate());
    if (this.date.getMonth() < 9) 
    {
      this.fecha = String(this.date.getFullYear() + "-" + "0" + (this.date.getMonth() +1) + "-" + this.date.getDate());
    }
    return this.fecha;
  }

  ngOnInit() {
  }

  changeButton()
  {
    if (this.disableChangeSaveButton) 
    {
      this.disableChangeSaveButton = true;
    }
  }

  saveCite()
  {  	
    if (this.editing) 
    {
      this.citesServices.put(this.cite1).subscribe(
      (data) => 
        { 
          alert('Cita actualizada'); 
          console.log(data);
          location.href ="http://localhost:4200/cites";
        }, 
      (error) => 
        {
          console.log(error);
          alert('Ocurrió un error');
        });
    }
    else
    {
      this.citesServices.save(this.cite1).subscribe(
      (data) => 
        { 
          alert('Cita guardada'); 
          console.log(data);
          window.history.back();
        }, 
      (error) => 
        {
          console.log(error);
          alert('No se encontraron coincidencias por la cedula');
      });
    }  	
  }
}
