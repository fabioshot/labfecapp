import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import {ROUTES} from './app.routes'

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { FuncionarioComponent } from './funcionario/funcionario.component';
import { CargoComponent } from './cargo/cargo.component';
import { BalancaComponent } from './balanca/balanca.component';
import { ProdutoComponent } from './produto/produto.component';
import { EmbalagemComponent } from './embalagem/embalagem.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    AboutComponent,
    FuncionarioComponent,
    CargoComponent,
    BalancaComponent,
    ProdutoComponent,
    EmbalagemComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
