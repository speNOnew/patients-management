import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth-service.service';
import { Usuario } from '../interfaces/user';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

    model: Usuario = new Usuario();
    error = '';
    loading: boolean = false;

    constructor(
        private router: Router,
        private authenticationService: AuthService) { }

    ngOnInit() {
        this.authenticationService.logout();
    }

    login() {
        this.loading = true;
        this.authenticationService.login(this.model)
            .subscribe(result => {
                if (result === true) {
                    this.router.navigate(['/home']);
                } else {
                    this.error = 'Credenciales incorrectas';
                    this.loading = false;
                }
            }, e => {
                this.error = 'Credenciales incorrectas';
                this.loading = false;

            });
    }
}