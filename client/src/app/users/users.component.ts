import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Usuario } from '../interfaces/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit{
	
  usuarios: Usuario[];

  constructor(private userService: UserService) 
  {
    this.getUsers();
  }

  getUsers()
  {
  	this.userService.get().subscribe(
      (data: Usuario[]) =>
    	{
        this.usuarios = data;
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
    if (confirm('¿Desea eliminar el usuario?')) 
    {
      this.userService.delete(id).subscribe(
        (data) => 
        {
          console.log(data);
          alert('Usuario eliminado');
          this.getUsers();
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
