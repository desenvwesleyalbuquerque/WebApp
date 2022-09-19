import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MensagemComponent } from './paginas/gerenciador/mensagem/mensagem.component';
import { UsuarioComponent } from './paginas/gerenciador/usuario/usuario.component';
import { DashboardComponent } from './paginas/home/dashboard/dashboard.component';
import { LoginComponent } from './paginas/login/login.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
    // { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'usuario', component: UsuarioComponent },
  { path: 'mensagem', component: MensagemComponent },
  // {
  //   path: '**', component: Error404Component
  // },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
