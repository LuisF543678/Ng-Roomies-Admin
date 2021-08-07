import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlojamientosComponent } from './alojamientos.component';
import { CreateAccommodationComponent } from './create-accommodation/create-accommodation.component';

const routes: Routes = [
  {
    path: '', component: AlojamientosComponent
  },
  {
    path: 'create', component: CreateAccommodationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlojamientosRoutingModule { }
