import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptorService } from './interceptors/interceptor.service';

import { MainRoutingModule } from './main-components/main-routing.module';
import { NavbarComponent } from './navbar/navbar.component';

import { ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { SharedModule } from './shared/shared/shared.module';
import {AngularFireStorageModule} from '@angular/fire/storage'

const firebaseConfig = {
  apiKey: "AIzaSyDlaea9L46r--_5ivWSn--ShFfQkrbu9cc",
  authDomain: "teocalli-af7b1.firebaseapp.com",
  databaseURL: "https://teocalli-af7b1-default-rtdb.firebaseio.com",
  projectId: "teocalli-af7b1",
  storageBucket: "teocalli-af7b1.appspot.com",
  messagingSenderId: "331630436932",
  appId: "1:331630436932:web:8e5672360350cb30779211",
  measurementId: "G-DH9HB6K6W4"
};

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    MainRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    SharedModule,
    AngularFireStorageModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
