import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ContatoComponent } from './components/contato/contato.component';
import { SobreComponent } from './components/sobre/sobre.component';
import { NavComponent } from './components/nav/nav.component';
import { ListaDeProdutosComponent } from './components/lista-de-produtos/lista-de-produtos.component';
import { GruposComponent } from './components/grupos/grupos.component';
import { HttpClientModule } from "@angular/common/http";
import { ProdutoComponent } from './components/produto/produto.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContatoComponent,
    SobreComponent,
    NavComponent,
    ListaDeProdutosComponent,
    GruposComponent,
    ProdutoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
