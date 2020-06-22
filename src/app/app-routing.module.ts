import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { PessoasComponent } from './pages/pessoas/pessoas.component';
import { AnotacoesComponent } from './pages/anotacoes/anotacoes.component';
import { GrupoComponent } from './pages/grupo/grupo.component';
import { LoginsComponent } from './pages/logins/logins.component';
import { PerfisComponent } from './pages/perfis/perfis.component';
import { RecursosComponent } from './pages/recursos/recursos.component';


const routes: Routes = [
  { 
    path: 'inicio', component: InicioComponent, children: [
      { path: 'pessoas', component: PessoasComponent},
      { path: 'grupo', component: GrupoComponent},
      { path: 'logins', component: LoginsComponent},
      { path: 'perfils', component: PerfisComponent},
      { path: 'recursos', component: RecursosComponent},
      { path: '', redirectTo: 'pessoas', pathMatch: 'full' }
    ]
  },
  { path: '', redirectTo: 'inicio', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
