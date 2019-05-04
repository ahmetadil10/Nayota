import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule } from '@angular/router';
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


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,

    AboutComponent,
    HomeComponent,

   
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
    RouterModule
    
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
