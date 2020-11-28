import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { LoginFacebookService } from '../services/login-facebook.service';
import { LoginTwitterService } from '../services/login-twitter.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  constructor(
    private loginFacebookService: LoginFacebookService,
    private loginTwitterService: LoginTwitterService,
    private toastController: ToastController
  ) { }

  ionViewDidEnter() {

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
}
