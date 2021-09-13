import { Component, OnInit } from '@angular/core';
import { Usuario } from '../interfaces/user';
import { UserService } from '../services/user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  dato: Usuario = 
  {
  	name: null,
  	email: null,
  	created_at: null,
  	id_rol_id: null
  }

  id: any;
  editing: boolean = false;
  datos: Usuario[];

  constructor(private userService: UserService, private activatedRoute: ActivatedRoute) 
  { 
    
    this.id = this.activatedRoute.snapshot.params['id'];

    if (this.id)
    {
      this.editing = true;
      this.userService.get().subscribe
      (
        (data: Usuario[]) =>
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

  saveUser()
  {  	
    if (this.editing) 
    {
      this.userService.put(this.dato).subscribe(
      (data) => 
        { 
          alert('Los datos del usuario han sido actualizados'); 
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
      this.userService.save(this.dato).subscribe(
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
