import { Pipe, PipeTransform } from '@angular/core';


@Pipe({name: 'startsWith'})
export class startsWithPipe implements PipeTransform {
 transform(value: any[], term: string): any[] {
   return value.filter((x:any) => x.last_name.toLowerCase().startsWith(term.toLowerCase()) || x.name.toLowerCase().startsWith(term.toLowerCase()));
   
 } 
}

// <br/>
// <input class="form-control mr-sm-2" type="text" [(ngModel)]="query" placeholder="Search" aria-label="Search" >
// <table class="table">
//  <thead class="thead-dark">
//    <tr>
//      <th scope="col">ID</th>
//      <th scope="col">NOMBRE</th>
//      <th scope="col">DESCRIPCION</th>
//      <th scope="col">GENERO</th>
//      <th scope="col">AÑO</th>
//      <th scope="col">DURACION</th>
//      <th scope="col"></th>
//      <th scope="col"></th>
//    </tr>
//  </thead>
//  <tbody >
//    <tr   *ngFor="let movie of movies | startsWith : query"  >
//      <td>{{movie.id}}</td>
//      <th>{{movie.nombre}}</th>
//      <td>{{movie.descripcion}}</td>
//      <td>{{movie.genero}}</td>
//      <td>{{movie.anho}}</td>
//      <td>{{movie.duracion}}</td>
//      <td><a class="btn btn-primary btn-sm " routerLink="/form/{{movie.id}}"> EDITAR</a></td>