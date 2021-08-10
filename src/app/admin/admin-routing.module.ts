import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EstadisticasComponent } from './estadisticas/estadisticas.component';
import { GestionarrendadosComponent } from './gestion-arrendados/gestionarrendados.component';
import { PeticionesarrendamientoComponent } from './peticiones-arrendamiento/peticionesarrendamiento.component';
import { ListaarrendadosComponent } from './lista-arrendados/listaarrendados.component';
import { GestionreportesComponent } from './gestion-reportes/gestionreportes.component';
import { ProfileComponent } from './profile/profile.component';
import { UserdetailsComponent } from './user-details/userdetails.component';
import { AlojamientosComponent } from './alojamientos/alojamientos.component';
import { MenuComponent } from './menu/menu.component';

const routes: Routes = [
  {
    path: 'menu', component: MenuComponent
  },
  {
    path: 'estadisticas', component: EstadisticasComponent
  },
  {
    path: 'gestion-arrendados', component: GestionarrendadosComponent
  },
  {
    path: 'peticiones-arrendamientos/:id', component: PeticionesarrendamientoComponent
  },
  {
    path: 'lista-arrendados', component: ListaarrendadosComponent
  },
  {
    path: 'gestion-reportes/:id', component: GestionreportesComponent
  },
  {
    path: 'profile', component: ProfileComponent
  },
  {
    path: 'user-details/:id', component: UserdetailsComponent

  },
  {
    path: 'alojamientos',
    loadChildren: () => import('./alojamientos/alojamientos.module').then(m => m.AlojamientosModule),
  }
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    [RouterModule.forChild(routes)]
  ],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
