import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PerfilSexoPage } from './perfil-sexo.page';

const routes: Routes = [
  {
    path: '',
    component: PerfilSexoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PerfilSexoPageRoutingModule {}
