import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeModuleRoutingModule } from './home-module-routing.module';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { FooterComponent } from './Components/footer/footer.component';
import { BodyComponent } from './Components/body/body.component';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { CarouselComponent } from './Components/carousel/carousel.component';
import { IndexesComponent } from './Components/indexes/indexes.component';
import { HttpClientModule } from '@angular/common/http';
import { Service1Service } from './Services/service1.service';
import { SearchComponent } from './Components/search/search.component';

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    BodyComponent,
    CarouselComponent,
    IndexesComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    HomeModuleRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers:[
    Service1Service
  ],
  exports:[
    NavbarComponent,
    FooterComponent
  ]
})
export class HomeModuleModule { }
