import { Component, OnInit } from '@angular/core';
import { CitesService } from '../services/cites.service';
import { Cite } from '../interfaces/cite';
import { Citeshow } from '../interfaces/citeshow';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-modific-cites',
  templateUrl: './modific-cites.component.html',
  styleUrls: ['./modific-cites.component.css']
})
export class ModificCitesComponent implements OnInit {

  date = new Date();
  fecha: any; // String(this.date.getFullYear() + "-" + "0" + (this.date.getMonth() +1) + "-" + this.date.getDate());
  fecha1 = this.monthFunction();

  cite1: Cite = 
  {
    id: this.activatedRoute.snapshot.params['id'],
  	date: null,
  }

  id:any;
  editing: boolean = false;
  cites: Cite[];

  citeshow: Citeshow =
  {
      ci: null,
      name_p: null,
      last_name_p:null,
      date: null,
      especialidad: null,
  }

  citesshow: Citeshow[];



  constructor(private citesServices: CitesService, private activatedRoute: ActivatedRoute) 
  { 
    
    this.id = this.activatedRoute.snapshot.params['id'];

    if (this.id)
    {
      this.editing = true;
      this.citesServices.get().subscribe
      (
        (data: Citeshow[]) =>
        {
          this.citesshow = data;
          this.citeshow = this.citesshow.find((n) => { return n.id == this.id});
          console.log(this.cite1);
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

  saveCite()
  {  	
    if (this.editing) 
    {
      this.citesServices.put(this.cite1).subscribe(
      (data) => 
        { 
          alert('Fecha cambiada'); 
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
      this.citesServices.save(this.cite1).subscribe(
      (data) => 
        { 
          alert('Cita guardada'); 
          console.log(data);
          location.href ="http://localhost:4200/cites";
        }, 
      (error) => 
        {
          console.log(error);
          alert('Ocurrió un error');
      });
    }  	
  }

}
