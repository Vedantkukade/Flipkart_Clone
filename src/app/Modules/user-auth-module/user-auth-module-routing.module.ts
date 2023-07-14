import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { SignupComponent } from './Components/signup/signup.component';


const routes: Routes = [
  {
    path:"userlogin",
    component:LoginComponent
  },
  {
    path:"usersignin",
    component:SignupComponent
  }
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserAuthModuleRoutingModule { }
