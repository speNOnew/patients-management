import { Component, OnInit } from '@angular/core';
import { Config, Menu } from '../accordion/types';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
   // signle open mode
   options: Config = { multi: false };

   menus: Menu[] = [
     {
       name: 'Gestión de Pacientes',
       iconClass: 'fa fa-users',
       active: false,
       submenu: [
         { iconClass: 'fa fa-users', name: 'Iniciar Historias', url: '/patients', permiso: 'secretaria' },
         { iconClass: 'fa fa-users', name: 'Citas', url: '/cites', permiso: 'secretaria' }
       ]
     },
     {
       name: 'Atención Médica',
       iconClass: 'fa fa-medkit',
       active: false,
       submenu: [
         { iconClass: 'fa fa-users', name: 'Historias Médicas', url: '/historys', permiso: 'secretaria' },
         { iconClass: 'fa fa-users', name: 'Consultas', url: '/consults', permiso: 'secretaria' }
       ]
     },
     {
       name: 'Estadísticas',
       iconClass: 'fa fa-bar-chart-o',
       active: false,
       submenu: [
         { iconClass: 'fa fa-users', name: 'Generales', url: '/generals', permiso: 'secretaria' },
         { iconClass: 'fa fa-users', name: 'Individuales', url: '/individuals', permiso: 'secretaria' }
       ]
     },
     {
       name: 'Administración',
       iconClass: 'fa fa-wrench',
       active: false,
       submenu: [
         {iconClass: 'fa fa-users', name: 'Usuarios', url: '/users', permiso: 'admin'},
         {iconClass: 'fa fa-users', name: 'Mantenimiento de tablas', url: '/tables', permiso: 'admin'},
         {iconClass: 'fa fa-users', name: 'Base de Datos', url: '/backup', permiso: 'admin'}
       ]
     }
   ];

  constructor() { }

  ngOnInit() {
  }

}
