import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NavController, ToastController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-recuperar-senha',
  templateUrl: './recuperar-senha.page.html',
  styleUrls: ['./recuperar-senha.page.scss'],
})
export class RecuperarSenhaPage implements OnInit {

  public formEmail: FormGroup;
  errorMessage: string = '';
  successMessage: string = '';


  constructor(private formBuilder: FormBuilder,
    public navCtrl: NavController,
    public toastController: ToastController,
    private authService: AuthService) {
    this.formEmail = this.formBuilder.group({
      email: ['', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])]
    });
  }

  onClick() {
    this.authService.sendPasswordResetEmail(this.formEmail.value.email, () => {
      this.navCtrl.navigateForward('/');
      this.presentToast('E-mail enviado com sucesso.');
    });
  }

  ngOnInit() {
  }

  async presentToast(msg: string) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }

  validation_messages = {
    'email': [
      { type: 'required', message: 'E-mail é obrigatório.' },
      { type: 'pattern', message: 'Digite um email válido.' }
    ]
  };

}
