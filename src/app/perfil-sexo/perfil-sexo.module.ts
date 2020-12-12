import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerfilSexoPageRoutingModule } from './perfil-sexo-routing.module';

import { PerfilSexoPage } from './perfil-sexo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerfilSexoPageRoutingModule
  ],
  declarations: [PerfilSexoPage]
})
export class PerfilSexoPageModule {}
