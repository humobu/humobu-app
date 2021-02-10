import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-grupos',
  templateUrl: './grupos.page.html',
  styleUrls: ['./grupos.page.scss'],
})
export class GruposPage {

  constructor(
    private router: Router,
    private toastController: ToastController, 
    private translate: TranslateService,
  ) {

  }

  private cardEstab = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}];
  private imgPerfil = [{}, {}, {}, {}, {}, {}];
  
  async abrirEstab() {
    try {
      this.router.navigate(["/tabs/grupos/estabelecimento"]);
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

}
