import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EstadisticasComponent } from './estadisticas/estadisticas.component';
import { PeticionesarrendamientoComponent } from './peticiones-arrendamiento/peticionesarrendamiento.component';
import { GestionarrendadosComponent } from './gestion-arrendados/gestionarrendados.component';
import { AdminRoutingModule } from './admin-routing.module';
import { GestionreportesComponent } from './gestion-reportes/gestionreportes.component';
import { ListaarrendadosComponent } from './lista-arrendados/listaarrendados.component';
import { ProfileComponent } from './profile/profile.component';
import { UserdetailsComponent } from './user-details/userdetails.component';
import { MenuComponent } from './menu/menu.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { UpdateprofileComponent } from './components/updateprofile/updateprofile.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { PickPhotoDialogComponent } from './components/pick-photo-dialog/pick-photo-dialog.component';
import { AddContactComponent } from './components/add-contact/add-contact.component';
import { UpdateContactDialogComponent } from './components/update-contact-dialog/update-contact-dialog.component';
import { DeleteContactDialogComponent } from './components/delete-contact-dialog/delete-contact-dialog.component';
import { MatStepperModule } from '@angular/material/stepper';
import { SharedModule } from '../shared/shared/shared.module';
import { DatePipe } from '@angular/common';
@NgModule({
  declarations: [
    EstadisticasComponent,
    PeticionesarrendamientoComponent,
    GestionarrendadosComponent,
    GestionreportesComponent,
    ListaarrendadosComponent,
    ProfileComponent,
    UserdetailsComponent,
    MenuComponent,
    UpdateprofileComponent,
    PickPhotoDialogComponent,
    AddContactComponent,
    UpdateContactDialogComponent,
    DeleteContactDialogComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatIconModule,

    //firebase
    
    SharedModule,
  ],
  providers : [DatePipe]
})
export class AdminModule { }
