import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KartComponent } from './Components/kart/kart.component';
import { KartpriceComponent } from './Components/kartprice/kartprice.component';
import { PriceComponent } from './Components/price/price.component';

const routes: Routes = [
  {
    path: "kartcomp",
    component: KartComponent,
    children:[
      {
        path: "kartprice",
        component: KartpriceComponent
      },
      {
        path: "price",
        component: PriceComponent
      },
      {
        path:"",
        redirectTo:"kartprice",
        pathMatch:"full"
      }
    ]
  }
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KartModuleRoutingModule { }
