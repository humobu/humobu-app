import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerfilSexoMaisPageRoutingModule } from './perfil-sexo-mais-routing.module';

import { PerfilSexoMaisPage } from './perfil-sexo-mais.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerfilSexoMaisPageRoutingModule
  ],
  declarations: [PerfilSexoMaisPage]
})
export class PerfilSexoMaisPageModule {}
