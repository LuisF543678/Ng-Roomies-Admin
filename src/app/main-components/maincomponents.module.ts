import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ResetpassComponent } from './resetpass/resetpass.component';
import { MainRoutingModule } from './main-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { ConfirmDialogComponent } from './register/confirm-dialog/confirm-dialog.component';



@NgModule({
  declarations: [AboutComponent, LoginComponent, RegisterComponent, ResetpassComponent, ConfirmDialogComponent],
  imports: [
    CommonModule,
    MainRoutingModule,
    ReactiveFormsModule,
    AngularFirestoreModule,
    AngularFireAuthModule
  ]
})
export class MaincomponentsModule { }
