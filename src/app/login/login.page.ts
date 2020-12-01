import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { LoginFacebookService } from '../services/login-facebook.service';
import { LoginTwitterService } from '../services/login-twitter.service';
import { LoginGoogleService } from '../services/login-google.service';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  senhaVisivel: boolean;
  public form: FormGroup;
  messageEmail = ""
  messagePassword = "";
  errorEmail = false;
  errorPassword = false;

  private acessar = {
    login: '',
    senha: ''
  };

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
      login: [this.acessar.login, Validators.required],
      senha: [this.acessar.senha, Validators.compose([Validators.minLength(6), Validators.maxLength(20),
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
        message: 'Erro ao realizar login com o Facebook, tente novamente',
        duration: 3000
      });

      toast.present();
    }
  }

  async loginUsingTwitter() {
    try {
      const login = await this.loginTwitterService.loginWithTwitter();

      console.log(login.additionalUserInfo.profile);
    } catch (error) {
      console.error(error);

      const toast = await this.toastController.create({
        animated: true,
        message: 'Erro ao realizar login com o Twitter, tente novamente',
        duration: 3000
      });

      toast.present();
    }
  }

  async loginUsingGoogle() {
    try {
      const login = await this.loginGoogleService.loginWithGoogle();

      console.log(login.additionalUserInfo.profile);
    } catch (error) {
      console.error(error);

      const toast = await this.toastController.create({
        animated: true,
        message: 'Erro ao realizar login com o Google, tente novamente',
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
        message: 'Erro ao realizar login com o Google, tente novamente',
        duration: 3000
      });

      toast.present();
    }
  }  

  // async entrar() {
  //   let { login, senha } = this.form.controls;

  //   if (!this.form.valid) {
  //     if (!login.valid) {
  //       this.errorEmail = true;
  //       this.messageEmail = "Ops! Email inválido";
  //     } else {
  //       this.messageEmail = "";
  //     }

  //     if (!senha.valid) {
  //       this.errorPassword = true;
  //       this.messagePassword ="A senha precisa ter de 6 a 20 caracteres"
  //     } else {
  //       this.messagePassword = "";
  //     }
  //   }
  //   else {
  //     alert("Login Realizado");
  //   }
  // }
  async entrar() {
    try {

    } catch (error) {

    }
  }
}
