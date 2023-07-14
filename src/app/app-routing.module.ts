import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:"homemodule",
    loadChildren:()=>import("../app/Modules/home-module/home-module.module").then(m=>m.HomeModuleModule)
  },
  {
    path:"kartmodule",
    loadChildren:()=>import("../app/Modules/kart-module/kart-module.module").then(m=>m.KartModuleModule)
  },
  {
    path:"usermodule",
    loadChildren:()=>import("../app/Modules/user-auth-module/user-auth-module.module").then(m=>(m.UserAuthModuleModule))

  },
  {
    path:"",
    redirectTo:"homemodule",
    pathMatch:"full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
