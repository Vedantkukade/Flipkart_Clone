import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KartModuleRoutingModule } from './kart-module-routing.module';
import { KartComponent } from './Components/kart/kart.component';
import { PriceComponent } from './Components/price/price.component';
import { KartpriceComponent } from './Components/kartprice/kartprice.component';
import { MaterialModule } from '../material/material.module';
import { DecimalPipe } from './Pipes/decimal.pipe';


@NgModule({
  declarations: [
    KartComponent,
    PriceComponent,
    KartpriceComponent,
    DecimalPipe,

  ],
  imports: [
    CommonModule,
    KartModuleRoutingModule,
    MaterialModule
  ]
})
export class KartModuleModule { 
  
  constructor(){
    console.log('kart')
  }
  }
