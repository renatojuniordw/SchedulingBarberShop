import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { ImagePicker } from '@ionic-native/image-picker/ngx';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.page.html',
  styleUrls: ['./usuario.page.scss'],
})

export class UsuarioPage implements OnInit {

  private formAlterUser: FormGroup;
  errorMessage: string = '';
  successMessage: string = '';

  validation_messages = {
    'email': [
      { type: 'required', message: 'E-mail é obrigatório.' },
      { type: 'pattern', message: 'Digite um email válido.' }
    ]
  };

  constructor(private formBuilder: FormBuilder, private authService: AuthService
    , private imagePicker: ImagePicker) {
    // console.log(this.imagePicker)
    this.formAlterUser = this.formBuilder.group({
      nome: ['', Validators.compose([
        Validators.required
      ])]
    });
  }

  ngOnInit() {
  }

  onClick() {
    console.log(this.formAlterUser.value)
    this.authService.atualizarDadosUsuario(this.formAlterUser.value.nome).then(function () {
      // this.menu.nomeUsuario = this.authService.userDetails().displayName;
    });
  }


  openImagePicker() {
    this.imagePicker.hasReadPermission().then(
      (result) => {
        console.log(result)
        if (result == false) {
          // no callbacks required as this opens a popup which returns async
          this.imagePicker.requestReadPermission();
        }
        else if (result == true) {
          this.imagePicker.getPictures({
            maximumImagesCount: 1
          }).then(
            (results) => {
              for (var i = 0; i < results.length; i++) {
                console.log(results[i]);
                // this.uploadImageToFirebase(results[i]);
              }
            }, (err) => console.log(err)
          );
        }
      }, (err) => {
        console.log(err);
      });
  }

  // uploadImageToFirebase(image) {
  //   image = normalizeURL(image);

  //   //uploads img to firebase storage
  //   this.firebaseService.uploadImage(image)
  //     .then(photoURL => {

  //       let toast = this.toastCtrl.create({
  //         message: 'Image was updated successfully',
  //         duration: 3000
  //       });
  //       toast.present();
  //     })
  // }

}
