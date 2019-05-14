import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';


import { CarouselModule } from 'ngx-owl-carousel-o';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import { from } from 'rxjs';
import { FooterComponent } from './footer/footer.component';

import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ContactsComponent } from './contacts/contacts.component';
import { FaqComponent } from './faq/faq.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SignupComponent } from './signup/signup.component';
import { CardComponent } from './card/card.component';
import { CommonModule } from "@angular/common";
import { Home1Component } from './home1/home1.component';




const appRoutes:Routes=
[
  {path:'' , component:AboutComponent},
  {path:'about' , component:AboutComponent},
  {path:'contact' , component:ContactsComponent},
  {path:'faq' , component:FaqComponent},
  {path:'home' , component:Home1Component},
  {path:'log' , component:LoginComponent},
  {path:'sign' , component:SignupComponent},
  {path:'card' , component:CardComponent},
]


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,

    AboutComponent,
    HomeComponent,
    ContactsComponent,
    FaqComponent,
    LoginComponent,
    NavbarComponent,
    SignupComponent,
    CardComponent,
    Home1Component,

   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbAlertModule,
    NgbModule,
    NgbPaginationModule,
    BrowserAnimationsModule,
    CarouselModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    CommonModule
       
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
