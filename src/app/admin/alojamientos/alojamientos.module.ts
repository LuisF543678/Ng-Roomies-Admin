import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlojamientosRoutingModule } from './alojamientos-routing.module';
import { AlojamientosComponent } from './alojamientos.component';
import { CreateAccommodationComponent } from './create-accommodation/create-accommodation.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { AccommodationDetailsComponent } from './accommodation-details/accommodation-details.component';
import { GeneralFormComponent } from './accommodation-details/general-form/general-form.component';
import { AddressFormComponent } from './accommodation-details/address-form/address-form.component';
import { PhotoDialogComponent } from './accommodation-details/photo-dialog/photo-dialog.component';


@NgModule({
  declarations: [
    AlojamientosComponent,
    CreateAccommodationComponent,
    AccommodationDetailsComponent,
    GeneralFormComponent,
    AddressFormComponent,
    PhotoDialogComponent,
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
