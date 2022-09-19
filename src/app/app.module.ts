import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {Component} from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab
// import {MenuItem} from 'primeng/api';                  //api

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CardModule} from 'primeng/card';

import {ButtonModule} from 'primeng/button';
import {EditorModule} from 'primeng/editor';
import { FormsModule } from '@angular/forms';

import { UsuarioComponent } from './paginas/gerenciador/usuario/usuario.component';
import { DashboardComponent } from './paginas/home/dashboard/dashboard.component';
import { LoginComponent } from './paginas/login/login.component';
import { MensagemComponent } from './paginas/gerenciador/mensagem/mensagem.component';

@NgModule({
  declarations: [
    AppComponent,
    MensagemComponent,
    UsuarioComponent,
    DashboardComponent,
    LoginComponent,
  ],
  imports: [
    AppRoutingModule,
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule, 
    AccordionModule,
    CardModule,
    ButtonModule,
    EditorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
