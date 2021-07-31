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
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { TokenInterceptor } from './interceptors/token.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import { AngularFireModule } from '@angular/fire';
import { AuthService } from './services/auth.service';

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
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: InterceptorService,
    multi: true
  },
  {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true
  },
  // Important configuration for the "#" in the production url
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
