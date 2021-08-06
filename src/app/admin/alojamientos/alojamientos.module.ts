import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlojamientosRoutingModule } from './alojamientos-routing.module';
import { AlojamientosComponent } from './alojamientos.component';
import { CreateAccommodationComponent } from './create-accommodation/create-accommodation.component';


@NgModule({
  declarations: [
    AlojamientosComponent,
    CreateAccommodationComponent
  ],
  imports: [
    CommonModule,
    AlojamientosRoutingModule
  ],
  exports: [
    AlojamientosComponent,
    CreateAccommodationComponent
  ]
})
export class AlojamientosModule { }
