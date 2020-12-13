import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PerfilSexoMaisPage } from './perfil-sexo-mais.page';

const routes: Routes = [
  {
    path: '',
    component: PerfilSexoMaisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PerfilSexoMaisPageRoutingModule {}
