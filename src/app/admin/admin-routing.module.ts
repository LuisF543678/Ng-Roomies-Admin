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
    path: 'estadisticas', component: EstadisticasComponent // no
  },
  {
    path: 'gestion-arrendados', component: GestionarrendadosComponent // si
  },
  {
    path: 'peticiones-arrendamientos', component: PeticionesarrendamientoComponent // si
  },
  {
    path: 'lista-arrendados', component: ListaarrendadosComponent // si
  },
  {
    path: 'gestion-reportes', component: GestionreportesComponent
  },
  {
    path: 'profile', component: ProfileComponent
  },
  {
    path: 'user-details', component: UserdetailsComponent

  },
  {
    path: 'alojamientos', component: AlojamientosComponent
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
