import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlojamientosRoutingModule } from './alojamientos-routing.module';
import { AlojamientosComponent } from './alojamientos.component';
import { CreateAccommodationComponent } from './create-accommodation/create-accommodation.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { InfoFormComponent } from './info-form/info-form.component';


@NgModule({
  declarations: [
    AlojamientosComponent,
    CreateAccommodationComponent,
    InfoFormComponent
  ],
  imports: [
    CommonModule,
    AlojamientosRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
  ],
  exports: [
    AlojamientosComponent,
    CreateAccommodationComponent,
  ]
})
export class AlojamientosModule { }
