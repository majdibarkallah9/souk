import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { FruitsModule } from './fruits/fruits.module';
@NgModule({
  
  imports: [
  HttpClientModule,
  BrowserModule,
  AppRoutingModule,
  FruitsModule
],

  declarations: [
    AppComponent
  ],

  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
