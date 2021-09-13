import { Component, OnInit } from '@angular/core';
import { CitesService } from '../services/cites.service';
import { ConsultsService } from '../services/consults.service';
import { Cite } from '../interfaces/cite';
import { Citeshow } from '../interfaces/citeshow';
import { Consult } from '../interfaces/consult';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-consult',
  templateUrl: './create-consult.component.html',
  styleUrls: ['./create-consult.component.css']
})
export class CreateConsultComponent implements OnInit {

  tabdiagnosticos = true;
  tabTratamientos = true;
  disableChangeTabdiagnosticoButton = true;
  disableChangeTabTratamientoButton = true;

  // Para traer los datos de la cita inhabilitados
  cite1: Cite =
  {
  	date: null,
  	ci: null,
  	id_medico_id: null,
  	id_especialidad_id: null
  }

  id_ci: any;
  editing = false;
  cites: Cite[];

  //Guardar datos de la consulta
  consult: Consult =
  {
    motive: null,
    sintoma: null,
    diagnostico: null,
    tratamiento: null,
    id_patient_id: 1,
    id_cite_id: Number(this.activatedRoute.snapshot.params['id'])
  }

  // id_cite_id: this.cites.,

  id_co: any;
  editing_co = false;
  consults: Consult[];

  //Guardar cita

  citeshow: Citeshow =
  {
      ci: null,
      name_p: null,
      last_name_p:null,
      date: null,
      especialidad: null,
  }

  citesshow: Citeshow[];

  constructor(private citesServices: CitesService, private consultsService: ConsultsService, private activatedRoute: ActivatedRoute)
 {

    this.id_ci = this.activatedRoute.snapshot.params['id'];

    if (this.id_ci)
    {
      this.editing = true;
      this.citesServices.get().subscribe
      (
        (data: Citeshow[]) =>
        {
          this.citesshow = data;
          this.citeshow = this.citesshow.find((n) => { return n.id == this.id_ci });
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

  ngOnInit() {
  }

  saveConsult()
  {
    // console.log(this.consult);
    this.consultsService.save(this.consult).subscribe(
    (data) =>
      {
        alert('Consulta guardada');
        console.log(data);
        location.href ="http://localhost:4200/consults";
      },
    (error) =>
      {
        console.log(error);
        alert('Ocurrió un error');
    });
  }

  changeTabdiagnostico()
  {
    this.tabdiagnosticos = false;
  }

  changeTabtratamiento()
  {
    this.tabTratamientos = false;
  }

  setSintomasButtonStatus()
  {
    this.disableChangeTabdiagnosticoButton = false;
    this.changeTabdiagnostico();
  }

  setTratamientoButtonStatus()
  {
    this.disableChangeTabTratamientoButton = false;
    this.changeTabtratamiento();
  }
}
