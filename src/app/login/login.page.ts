import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { LoginFacebookService } from '../services/login-facebook.service';
import { LoginTwitterService } from '../services/login-twitter.service';
import { LoginGoogleService } from '../services/login-google.service';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  senhaVisivel: boolean;
  
  constructor(
    private loginFacebookService: LoginFacebookService,
    private loginTwitterService: LoginTwitterService,
    private loginGoogleService: LoginGoogleService,
    private toastController: ToastController,
    private translate: TranslateService,
    private router: Router
  ) { 
    this.translate.use('pr-br');
    this.translate.setDefaultLang('pt-br');
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
}
