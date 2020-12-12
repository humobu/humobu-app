import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerfilPageRoutingModule } from './perfil-routing.module';

import { PerfilPage } from './perfil.page';
import { BrMaskerModule } from 'br-mask';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerfilPageRoutingModule,
    BrMaskerModule
  ],
  declarations: [PerfilPage]
})
export class PerfilPageModule {}
