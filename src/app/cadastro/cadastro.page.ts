import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

  constructor(
    private translate: TranslateService
  ) { 
    this.translate.use('pr-br');
    this.translate.setDefaultLang('pt-br');
  }

  ionViewDidEnter() {

  }

  ngOnInit() {
  }

}
