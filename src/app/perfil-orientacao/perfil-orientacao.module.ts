import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerfilOrientacaoPageRoutingModule } from './perfil-orientacao-routing.module';

import { PerfilOrientacaoPage } from './perfil-orientacao.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerfilOrientacaoPageRoutingModule
  ],
  declarations: [PerfilOrientacaoPage]
})
export class PerfilOrientacaoPageModule {}
