import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PerfilOrientacaoPage } from './perfil-orientacao.page';

const routes: Routes = [
  {
    path: '',
    component: PerfilOrientacaoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PerfilOrientacaoPageRoutingModule {}
