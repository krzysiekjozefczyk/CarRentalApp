import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { CarouselModule, WavesModule } from 'angular-bootstrap-md';


import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { AuthService } from './_services/auth.service';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { ErrorIntercptorProvider } from './_services/error.interceptor';

@NgModule({
  declarations: [
    AppComponent,
      NavComponent,
      HomeComponent,
      RegisterComponent
   ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    CarouselModule,
    WavesModule,
  ],
  providers: [
    AuthService,
    ErrorIntercptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
