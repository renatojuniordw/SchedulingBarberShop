import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  // { path: 'agendamento', loadChildren: './pages/agendamento/agendamento.module#AgendamentoPageModule' },
  // { path: 'agendamento/:id', loadChildren: './pages/agendamento/agendamento.module#AgendamentoPageModule' },
  // { path: 'cadastrar', loadChildren: './pages/cadastrar/cadastrar.module#CadastrarPageModule' },
  // { path: 'home', loadChildren: './pages/home/home.module#HomePageModule' },
  // { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: 'menu', loadChildren: './pages/menu/menu.module#MenuPageModule' },
  { path: 'recuperar-senha', loadChildren: './pages/recuperar-senha/recuperar-senha.module#RecuperarSenhaPageModule' },
  { path: 'usuario', loadChildren: './pages/usuario/usuario.module#UsuarioPageModule' },
  // { path: 'configuracao', loadChildren: './pages/configuracao/configuracao.module#ConfiguracaoPageModule' },
  // { path: 'modal', loadChildren: './pages/modal/modal.module#ModalPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
