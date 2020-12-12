import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { LoginFacebookService } from '../services/login-facebook.service';
import { LoginTwitterService } from '../services/login-twitter.service';
import { LoginGoogleService } from '../services/login-google.service';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { plainToClass } from 'class-transformer';
import { Usuario } from '../models/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  senhaVisivel: boolean;
  public form: FormGroup;
  private usuario = new Usuario();

  constructor(
    private loginFacebookService: LoginFacebookService,
    private loginTwitterService: LoginTwitterService,
    private loginGoogleService: LoginGoogleService,
    private toastController: ToastController,
    private translate: TranslateService,
    private router: Router,
    private formBuilder: FormBuilder
  ) { 
    this.translate.use('pt-br');
    this.translate.setDefaultLang('pt-br');

    this.form = this.formBuilder.group({
      email: [this.usuario.email, [Validators.required, Validators.email]],
      senha: [this.usuario.senha, Validators.compose([Validators.minLength(6), Validators.maxLength(20),
      Validators.required])],
    });
  }

  ionViewDidEnter() {

  }

  async exibirSenha(){
    this.senhaVisivel = !this.senhaVisivel;
  }

  async loginUsingFacebook() {
    try {      
      const login = await this.loginFacebookService.loginWithFacebook();

      console.log(login.additionalUserInfo.profile);
    } catch (error) {
      console.error(error);

      const toast = await this.toastController.create({
        animated: true,
        message: await this.translate.get("ERRO_FACEBOOK").toPromise(),
        duration: 3000
      });

      toast.present();
    }
  }

  // async loginUsingTwitter() {
  //   try {
  //     const login = await this.loginTwitterService.loginWithTwitter();

  //     console.log(login.additionalUserInfo.profile);
  //   } catch (error) {
  //     console.error(error);

  //       const toast = await this.toastController.create({
  //         animated: true,
  //         message: 'Erro ao realizar login com o Twitter, tente novamente',
  //         duration: 3000
  //       });

  //       toast.present();
  //   }
  // }

  async loginUsingGoogle() {
    try {
      const login = await this.loginGoogleService.loginWithGoogle();

      console.log(login.additionalUserInfo.profile);
    } catch (error) {
      console.error(error);

      const toast = await this.toastController.create({
        animated: true,
        message: await this.translate.get("ERRO_GOOGLE").toPromise(),
        duration: 3000
      });

      toast.present();
    }
  }

  async cadastrar() {
    try {
      this.router.navigate(["cadastro"]);
    } catch (error) {
      console.error(error);

      const toast = await this.toastController.create({
        animated: true,
        message: await this.translate.get("ERRO_CADASTRO").toPromise(),
        duration: 3000
      });

      toast.present();
    }
  }  

  async entrar() {
    let { email, senha } = this.form.controls;
    let toast;

    if (!this.form.valid) {
      if (!email.valid) {
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
      this.router.navigate(["tabs"]);
    }
  }
  // async entrar() {
  //   try {
      
  //   } catch (error) {

  //   }
  // }
}
