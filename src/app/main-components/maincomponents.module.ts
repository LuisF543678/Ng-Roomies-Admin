import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ResetpassComponent } from './resetpass/resetpass.component';
import { MainRoutingModule } from './main-routing.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [AboutComponent, LoginComponent, RegisterComponent, ResetpassComponent],
  imports: [
    CommonModule,
    MainRoutingModule,
    ReactiveFormsModule
  ]
})
export class MaincomponentsModule { }
