import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.scss'],
})
export class FormLoginComponent implements OnInit {

  private formLogin: FormGroup;
  errorMessage: string = '';
  isSenha: boolean;

  validation_messages = {
    'email': [
      { type: 'required', message: 'E-mail é obrigatório.' },
      { type: 'pattern', message: 'Digite um email válido.' }
    ],
    'password': [
      { type: 'required', message: 'Senha é obrigatório' },
      { type: 'minlength', message: 'A senha deve ter pelo menos 6 caracteres.' }
    ]
  };

  constructor(public navCtrl: NavController,
    private authService: AuthService,
    public toastController: ToastController,
    private formBuilder: FormBuilder) {
    this.formLogin = this.formBuilder.group({
      email: ['', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])],
      senha: ['', Validators.compose([
        Validators.required,
        Validators.minLength(6)
      ])]
    });
  }

  ngOnInit() { }

  onClick() {
    this.loginUser(this.formLogin.value)
  }

  loginUser(value) {
    this.authService.loginUser(value)
      .then(res => {
        this.errorMessage = '';
        this.navCtrl.navigateRoot('/menu/home');
      }, err => {
        this.msgErroAlert(err.code);
      })
  }


  msgErroAlert(errorCode: string) {
    switch (errorCode) {
      case 'auth/invalid-email':
        this.presentToast('E-mail não cadastrado.');
        break;
      case 'auth/user-not-found':
        this.presentToast('Não há registro de usuário correspondente a esse e-mail.');
        break;
      case 'auth/wrong-password':
        this.presentToast('Usuário ou senha inválida.');
        break;
    }
  }

  togglePasswordFieldType() {
    this.isSenha = !this.isSenha;
  }

  async presentToast(msg: string) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }

}
