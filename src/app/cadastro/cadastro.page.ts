import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage {

  senhaVisivel: boolean;
  messageEmail = ""
  messagePassword = "";
  errorEmail = false;
  errorPassword = false;

  private usuario = {
    email: '',
    senha: ''
  };

  constructor(
    private angularFireAuth: AngularFireAuth,
    private translate: TranslateService
  ) { 
    this.translate.use('pt-br');
    this.translate.setDefaultLang('pt-br');
  }

  ionViewDidEnter() {

  }

  async exibirSenha(){
    this.senhaVisivel = !this.senhaVisivel;
  }
  
  async cadastrar() {
    try {
      const usuarioCriado = await this.angularFireAuth.createUserWithEmailAndPassword(this.usuario.email, this.usuario.senha);
      console.log(usuarioCriado);
    } catch (error) {
      console.error(error);
    }
  }
}
