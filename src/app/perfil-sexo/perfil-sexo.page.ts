import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController, NavController } from '@ionic/angular';
import { GlobalFooService } from '../GlobalFooService';


@Component({
  selector: 'app-perfil-sexo',
  templateUrl: './perfil-sexo.page.html',
  styleUrls: ['./perfil-sexo.page.scss'],
})
export class PerfilSexoPage {

  constructor(
    private router: Router,
    private toastController: ToastController,
    public navCtrl: NavController,
    private globalFooService: GlobalFooService
  ) { 

  }

  private radioValue;

  async selecionaMais() {
    try {      
      this.router.navigate(['/tabs/perfil/sexo/mais']);
    } catch (error) {
      console.error(error);

      const toast = await this.toastController.create({
        animated: true,
        message: 'Não foi possível selecionar sexo, tente novamente.',
        duration: 3000
      });

      toast.present();
    }
  }

  onSomeButtonClick() {
    this.globalFooService.publishSomeData({
        sexo: this.radioValue
    });
}

}
