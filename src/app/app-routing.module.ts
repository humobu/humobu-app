import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'cadastro',
    loadChildren: () => import('./cadastro/cadastro.module').then( m => m.CadastroPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'perfil-sexo',
    loadChildren: () => import('./perfil-sexo/perfil-sexo.module').then(m => m.PerfilSexoPageModule)
  },
  {
    path: 'perfil-orientacao',
    loadChildren: () => import('./perfil-orientacao/perfil-orientacao.module').then(m => m.PerfilOrientacaoPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

// ionic cordova plugin add cordova-plugin-facebook4 --save --variable APP_ID="790558231494835" --variable APP_NAME="humobu"
