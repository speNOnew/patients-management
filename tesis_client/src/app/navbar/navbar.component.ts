import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth-service.service';
import { Usuario } from '../interfaces/user';
import { Observable } from 'rxjs';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  model: string;

  constructor(private authenticate: AuthService) 
  {
  	this.model = localStorage.getItem('user');
  }

  reload()
  {
    location.reload();
  }
  
  ngOnInit() {
  }

}
