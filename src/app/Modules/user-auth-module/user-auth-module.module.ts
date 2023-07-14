import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserAuthModuleRoutingModule } from './user-auth-module-routing.module';
import { LoginComponent } from './Components/login/login.component';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { SignupComponent } from './Components/signup/signup.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
    
  ],
  imports: [
    CommonModule,
    UserAuthModuleRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
    
  ]
})
export class UserAuthModuleModule {

  constructor(){
    console.log('kart2')
  }

 }
