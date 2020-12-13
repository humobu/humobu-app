import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActionSheetController, LoadingController, Platform, ToastController } from '@ionic/angular';
import { File, FileEntry } from '@ionic-native/File/ngx';
import { Camera, CameraOptions, PictureSourceType } from '@ionic-native/camera/ngx';
import { FilePath } from '@ionic-native/file-path/ngx';

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
    private filePath: FilePath
  ) { 

  }

  private imagens = ["", "", "", "", "", ""]
  images = [];

  async selecionaSexo() {
    try {      
      this.router.navigate(['/tabs/perfil/sexo']);
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


async selecionaImage() {
    const actionSheet = await this.actionSheetController.create({
        header: "Select Image source",
        buttons: [{
                text: 'Load from Library',
                handler: () => {
                    this.takePicture(this.camera.PictureSourceType.PHOTOLIBRARY);
                }
            },
            {
                text: 'Use Camera',
                handler: () => {
                    this.takePicture(this.camera.PictureSourceType.CAMERA);
                }
            },
            {
                text: 'Cancel',
                role: 'cancel'
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
  //this.storage.get("teste").then(images => {
      let arr = [];
      //if (!arr) {
        //  let newImages = [name];
      //} else {
          arr.push(name);
      //}

      let filePath = this.file.dataDirectory + name;
      //let resPath = this.pathForImage(filePath);

      let newEntry = {
          name: name,
          filePath: filePath
      };
      console.log(filePath);

      this.images = [newEntry, ...this.images];
      this.ref.detectChanges(); // trigger change detection cycle
  //});
}

}
