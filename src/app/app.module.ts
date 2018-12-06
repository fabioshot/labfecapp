import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { FuncionarioComponent } from './funcionario/funcionario.component';
import { CargoComponent } from './cargo/cargo.component';
import { BalancaComponent } from './balanca/balanca.component';
import { ProdutoComponent } from './produto/produto.component';
import { EmbalagemComponent } from './embalagem/embalagem.component';
import { AmostraComponent } from './amostra/amostra.component';
import { CalibragemComponent } from './calibragem/calibragem.component';
import { AnalisesComponent } from './analises/analises.component';
import { CamposComponent } from './util/campos/campos.component';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';
import { LoginComponent } from './login/login.component';
import { RelatorioComponent } from './relatorio/relatorio.component';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';

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
    EmbalagemComponent,
    AmostraComponent,
    CalibragemComponent,
    AnalisesComponent,
    CamposComponent,
    LoginComponent,
    RelatorioComponent
  ],
  imports: [
    RouterModule.forRoot(ROUTES),
    GraphQLModule,
    HttpClientModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
