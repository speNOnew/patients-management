import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CustomFormsModule } from 'ng2-validation';
import { startsWithPipe } from './customstart.pipes';
import { ChartsModule } from 'ng2-charts';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LogautComponent } from './logaut/logaut.component';
import { LoginComponent } from './login/login.component';
import { NavbarLoginComponent } from './navbar-login/navbar-login.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CitesComponent } from './cites/cites.component';
import { CreateCitesComponent } from './create-cites/create-cites.component';
import { IniHisComponent } from './ini-his/ini-his.component';
import { PatientsComponent } from './patients/patients.component';
import { HistorysComponent } from './historys/historys.component';
import { ViewHistoryComponent } from './view-history/view-history.component';
import { ConsultsComponent } from './consults/consults.component';
import { CreateConsultComponent } from './create-consult/create-consult.component';
import { AccordionComponent } from './accordion/accordion.component';
import { CreateEmergencyComponent } from './create-emergency/create-emergency.component';
import { UsersComponent } from './users/users.component';
import { BtnGobackComponent } from './btn-goback/btn-goback.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { ModificCitesComponent } from './modific-cites/modific-cites.component';
import { NgxPaginationModule } from 'ngx-pagination';

import { LoginGuard } from './login.guard';
import { NologinGuard } from './nologin.guard';
import { FilterPipe } from './pipes/filter.pipe';
import { FilterpatientPipe } from './pipes/filterpatient.pipe';
import { ChartsGeneralsComponent } from './charts-generals/charts-generals.component';
import { ChartsIndividualsComponent } from './charts-individuals/charts-individuals.component';

const routes: Routes = [
    { path: 'home', component: HomeComponent, canActivate: [LoginGuard] },
    { path: 'patients', component: PatientsComponent, canActivate: [LoginGuard] },
    { path: 'ini-his', component: IniHisComponent, canActivate: [LoginGuard] },
    { path: 'ini-his/:id', component: IniHisComponent, canActivate: [LoginGuard] },
    { path: 'cites', component: CitesComponent, canActivate: [LoginGuard] },
    { path: 'create-cites', component: CreateCitesComponent, canActivate: [LoginGuard] },
    { path: 'modific-cites/:id', component: ModificCitesComponent, canActivate: [LoginGuard] },
    { path: 'historys', component: HistorysComponent, canActivate: [LoginGuard] },
    { path: 'view-history/:id', component: ViewHistoryComponent, canActivate: [LoginGuard] },
    { path: 'consults', component: ConsultsComponent, canActivate: [LoginGuard] },
    { path: 'create-consult/:id', component: CreateConsultComponent, canActivate: [LoginGuard] },
    { path: 'create-emergency', component: CreateEmergencyComponent, canActivate: [LoginGuard] },
    { path: 'generals', component: ChartsGeneralsComponent, canActivate: [LoginGuard] },
    { path: 'individuals', component: ChartsIndividualsComponent, canActivate: [LoginGuard] },
    { path: 'users', component: UsersComponent, canActivate: [LoginGuard] },
    { path: 'create-user', component: CreateUserComponent, canActivate: [LoginGuard] },
    { path: 'create-user/:id', component: CreateUserComponent, canActivate: [LoginGuard] },
    { path: 'login', component: LoginComponent, canActivate: [NologinGuard] },
    { path: '', component: LoginComponent, canActivate: [NologinGuard] },

  ];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    LogautComponent,
    LoginComponent,
    NavbarLoginComponent,
    SidebarComponent,
    CitesComponent,
    CreateCitesComponent,
    IniHisComponent,
    AccordionComponent,
    PatientsComponent,
    HistorysComponent,
    ViewHistoryComponent,
    ConsultsComponent,
    CreateConsultComponent,
    CreateEmergencyComponent,
    BtnGobackComponent,
    UsersComponent,
    CreateUserComponent,
    startsWithPipe,
    ModificCitesComponent,
    FilterPipe,
    FilterpatientPipe,
    ChartsGeneralsComponent,
    ChartsIndividualsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    HttpModule,
    FormsModule,
    NgbModule.forRoot(),
    CustomFormsModule,
    NgxPaginationModule,
    ChartsModule
  ],
  providers: [
    LoginGuard,
    NologinGuard,

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
