import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { DashboardGuard } from './guards/dashboard.guard';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [{

  path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
},
{
  path: 'webcreateorreset',
  loadChildren: () => import('./main-components/maincomponents.module').then(m => m.MaincomponentsModule)
},
{
  path: 'admin',
  loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
  //canActivate:[DashboardGuard]
},
// Important the route must be here
{ path: '404', component: NotfoundComponent },
{ path: '**', redirectTo: '/404', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
