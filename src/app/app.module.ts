import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestformComponent } from './testform/testform.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NavComponent } from './nav/nav.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ModalpopupComponent } from './modalpopup/modalpopup.component';
import { RegisterformComponent } from './registerform/registerform.component';
import {DashboardComponent} from './dashboard/dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    TestformComponent,
    NavComponent,
    LoginComponent,
    RegisterComponent,
    ModalpopupComponent,
    RegisterformComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
