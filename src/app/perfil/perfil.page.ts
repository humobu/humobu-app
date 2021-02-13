import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActionSheetController, LoadingController, Platform, ToastController } from '@ionic/angular';
import { File, FileEntry } from '@ionic-native/File/ngx';
import { Camera, CameraOptions, PictureSourceType } from '@ionic-native/camera/ngx';
import { FilePath } from '@ionic-native/file-path/ngx';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { GlobalFooService } from '../observableData';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage {

  constructor(
    private router: Router,
    private toastController: ToastController,
    private camera: Camera, 
    private file: File,
    private actionSheetController: ActionSheetController, 
    private plt: Platform, 
    private loadingController: LoadingController,
    private ref: ChangeDetectorRef,
    private filePath: FilePath,
    private webview: WebView,
    private globalFooService: GlobalFooService
  ) { 

  }

  private imagens = [{}, {}, {}, {}, {}, {}];
  private indexfoto;
  private sexo = "";
  private orientacao = "";  
  private idadeAtv;
  private generoAtv;
  private orientacaoAtv;

  async selecionaSexo() {
    try {      
      this.router.navigate(['/tabs/perfil/sexo']);
      this.globalFooService.getSexo().subscribe((data) => {
        this.sexo = data.sexo;
      });
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

  async selecionaOrientacao() {
    try {
      this.router.navigate(["/tabs/perfil/orientacao"]);
      this.globalFooService.getOrientacao().subscribe((data) => {
        let orientacoes = data.orientacao;   
        let sOrientacao = "";     
        orientacoes.forEach(element => {
          sOrientacao += element.descricao + ", ";
        });
        if(orientacoes){
          this.orientacao = sOrientacao.trim().slice(0, sOrientacao.trim().length - 1);
        }
      });
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


  async selecionaImage(index) {
      this.indexfoto = index;
      const actionSheet = await this.actionSheetController.create({
          header: "Selecionar Imagem",
          buttons: [{
                  text: 'Carregar da biblioteca',
                  handler: () => {
                      this.takePicture(this.camera.PictureSourceType.PHOTOLIBRARY);
                  }
              },
              {
                  text: 'Usar câmera',
                  handler: () => {
                      this.takePicture(this.camera.PictureSourceType.CAMERA);
                  }
              },
              {
                  text: 'Cancelar',
                  role: 'cancelar'
              }
          ]
      });
      await actionSheet.present();
  }

  takePicture(sourceType: PictureSourceType) {
    var options: CameraOptions = {
        quality: 100,
        sourceType: sourceType,
        saveToPhotoAlbum: false,
        correctOrientation: true
    };

    this.camera.getPicture(options).then(imagePath => {
        if (this.plt.is('android') && sourceType === this.camera.PictureSourceType.PHOTOLIBRARY) {
            this.filePath.resolveNativePath(imagePath)
                .then(filePath => {
                    let correctPath = filePath.substr(0, filePath.lastIndexOf('/') + 1);
                    let currentName = imagePath.substring(imagePath.lastIndexOf('/') + 1, imagePath.lastIndexOf('?'));
                    this.copyFileToLocalDir(correctPath, currentName, this.createFileName());
                });
        } else {
            var currentName = imagePath.substr(imagePath.lastIndexOf('/') + 1);
            var correctPath = imagePath.substr(0, imagePath.lastIndexOf('/') + 1);
            this.copyFileToLocalDir(correctPath, currentName, this.createFileName());
        }
    });

  }

  createFileName() {
    var d = new Date(),
        n = d.getTime(),
        newFileName = n + ".jpg";
    return newFileName;
  }

  copyFileToLocalDir(namePath, currentName, newFileName) {
    this.file.copyFile(namePath, currentName, this.file.dataDirectory, newFileName).then(success => {
        this.updateStoredImages(newFileName);
    }, error => {
      console.error(error);
    });
  }

  updateStoredImages(name) {
    let filePath = this.file.dataDirectory + name;
    let resPath = this.pathForImage(filePath);

    let newEntry = {
    name: name,
    path: resPath,
    filePath: filePath
    };

    this.imagens[this.indexfoto] = newEntry;
    this.ref.detectChanges();
  }

  pathForImage(img) {
    if (img === null) {
      return '';
    } else {
      let converted = this.webview.convertFileSrc(img);
      return converted;
    }
  }

  mostraIdade() {
    this.idadeAtv = !this.idadeAtv;
  }

  mostraGenero() {
    this.generoAtv = !this.generoAtv;
  }

  mostraOrientacao() {
    this.orientacaoAtv = !this.orientacaoAtv;
  }

}
