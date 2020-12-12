import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PerfilPage } from './perfil.page';

const routes: Routes = [
  {
    path: '',
    component: PerfilPage,
    children: [
      {
        path: 'perfil-sexo',
        loadChildren: () => import('../perfil-sexo/perfil-sexo.module').then(m => m.PerfilSexoPageModule)
      },
      {
        path: 'perfil-orientacao',
        loadChildren: () => import('../perfil-orientacao/perfil-orientacao.module').then(m => m.PerfilOrientacaoPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PerfilPageRoutingModule {}
