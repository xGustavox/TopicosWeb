import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { NavegadorComponent } from './components/navegador/navegador.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { PessoasComponent } from './pages/pessoas/pessoas.component';
import { AnotacoesComponent } from './pages/anotacoes/anotacoes.component';
import { GrupoComponent } from './pages/grupo/grupo.component';
import { LoginsComponent } from './pages/logins/logins.component';
import { PerfisComponent } from './pages/perfis/perfis.component';
import { RecursosComponent } from './pages/recursos/recursos.component';
import { PerfilRecursoComponent } from './pages/perfil-recurso/perfil-recurso.component';
import { PessoaGrupoComponent } from './pages/pessoa-grupo/pessoa-grupo.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    NavegadorComponent,
    PessoasComponent,
    AnotacoesComponent,
    GrupoComponent,
    LoginsComponent,
    PerfisComponent,
    RecursosComponent,
    PerfilRecursoComponent,
    PessoaGrupoComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
