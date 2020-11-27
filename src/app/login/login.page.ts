import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  constructor(
    private loginService: LoginService,
    private toastController: ToastController
  ) { }

  ionViewDidEnter() {

  }

  async loginUsingFacebook() {
    try {
      const login = await this.loginService.loginWithFacebook();

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
}
