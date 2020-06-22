import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { AnotacaoListaComponent } from './pages/anotacao/anotacao-lista/anotacao-lista.component';
import { GrupoListaComponent } from './pages/grupo/grupo-lista/grupo-lista.component';
import { PessoasComponent } from './pages/pessoas/pessoas/pessoas.component';


const routes: Routes = [
  { 
    path: 'inicio', component: InicioComponent, children: [
      { path: 'pessoas', component: PessoasComponent},
      { path: 'anotacao', component: AnotacaoListaComponent},
      { path: 'grupo', component: GrupoListaComponent},
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
