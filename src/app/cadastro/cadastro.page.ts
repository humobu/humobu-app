import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Usuario } from '../models/usuario';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage {

  senhaVisivel: boolean;
  public form: FormGroup;
  private usuario = new Usuario();

  constructor(
    private angularFireAuth: AngularFireAuth,
    private translate: TranslateService,
    private toastController: ToastController,
    private formBuilder: FormBuilder
  ) { 
    this.translate.use('pt-br');
    this.translate.setDefaultLang('pt-br');

    this.form = this.formBuilder.group({
      email: [this.usuario.email, [Validators.required, Validators.email]],
      senha: [this.usuario.senha, Validators.compose([Validators.minLength(6), Validators.maxLength(20),
      Validators.required])],
      nome: [this.usuario.nome, [Validators.required]],
      sobrenome: [this.usuario.sobrenome, [Validators.required]],
    });
  }

  ionViewDidEnter() {

  }

  async exibirSenha(){
    this.senhaVisivel = !this.senhaVisivel;
  }
  
  async cadastrar() {
    let toast;

    try {

      let { nome, sobrenome, email, senha } = this.form.controls;
      
      if (!this.form.valid) {
        
        if (!nome.valid) {
          toast = await this.toastController.create({
            animated: true,
            message: await this.translate.get("NOME_INVALIDO").toPromise(),
            duration: 3000
          });
        } else if (!sobrenome.valid) {
          toast = await this.toastController.create({
            animated: true,
            message: await this.translate.get("SOBRENOME_INVALIDO").toPromise(),
            duration: 3000
          });
        } else if (!email.valid) {
          toast = await this.toastController.create({
            animated: true,
            message: await this.translate.get("EMAIL_INVALIDO").toPromise(),
            duration: 3000
          });
        } else if (!senha.valid) {
          toast = await this.toastController.create({
            animated: true,
            message: await this.translate.get("SENHA_INVALIDA").toPromise(),
            duration: 3000
          });
        }
  
        toast.present();

      } else {
        const usuarioCriado = await this.angularFireAuth.createUserWithEmailAndPassword(this.usuario.email, this.usuario.senha);
        console.log(usuarioCriado);
      }      
    } catch (error) {
      console.error(error.message);
      toast = await this.toastController.create({
        animated: true,
        message: error.message,
        duration: 3000
      });
      toast.present();
    }
  }
}
