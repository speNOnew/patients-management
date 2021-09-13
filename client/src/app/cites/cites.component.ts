import { Component, OnInit } from '@angular/core';
import { CitesService } from '../services/cites.service';
import { Cite } from '../interfaces/cite';
import { Citeshow } from '../interfaces/citeshow';
import { FilterPipe } from '../pipes/filter.pipe';


@Component({
  selector: 'app-cites',
  templateUrl: './cites.component.html',
  styleUrls: ['./cites.component.css']
})
export class CitesComponent implements OnInit 
{
  cites: Cite[];
  citeshow: Citeshow[];

  constructor(private citeService: CitesService) 
  {
    this.getCites();
  }

  getCites()
  {
  	this.citeService.get().subscribe(
      (data: Citeshow[]) =>
    	{
        this.citeshow = data;
    	},
      (error) =>
      {
        console.log();
        alert('Error en la consulta');
      }
    ); 
  }

  ngOnInit() { }

  delete(id)
  {
    if (confirm('Desea eliminar la cita?')) 
    {
      this.citeService.delete(id).subscribe(
        (data) => 
        {
          console.log(data);
          alert('Cita eliminada');
          this.getCites();
        },
        (error) =>
        {
          console.log(error);
          alert('Error al intentar eliminar');
        }
      );      
    }
  }
}
