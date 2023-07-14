import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './Components/body/body.component';
import { SearchComponent } from './Components/search/search.component';



const routes: Routes = [
  {
    path:"",
    component:BodyComponent,
  },
  {
    path:"search/:params",
    component:SearchComponent
  },
  {
    path:"search/:params",
    redirectTo:"search/:params",
    pathMatch:"full"
  }
  
 
   

  

];

@NgModule({
  imports: [RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class HomeModuleRoutingModule { }
