import { Component, OnInit } from '@angular/core';
import { GlobalFooService } from '../GlobalFooService';
import { Orientacao } from '../models/orientacao';

@Component({
  selector: 'app-perfil-orientacao',
  templateUrl: './perfil-orientacao.page.html',
  styleUrls: ['./perfil-orientacao.page.scss'],
})
export class PerfilOrientacaoPage {

  constructor(
    private globalFooService: GlobalFooService,
  ) {
  
  }

  private orientacao = new Array<Orientacao>(
    new Orientacao (1, "Heterosexual", false),
    new Orientacao (2, "Gay", false),
    new Orientacao (3, "Lésbica", false),
    new Orientacao (4, "Bissexual", false),
    new Orientacao (5, "Assexual", false),
    new Orientacao (6, "Demissexual", false),
    new Orientacao (7, "Pansexual", false),
    new Orientacao (8, "Queer", false),
    new Orientacao (9, "Questionando", false),
  );

  private selected = [];

  back() {
    this.globalFooService.publishSomeData({
        sexo: this.selected
    });
    console.log(this.selected[0]);
  }

}
