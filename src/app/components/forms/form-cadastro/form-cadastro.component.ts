import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { NavController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-form-cadastro',
  templateUrl: './form-cadastro.component.html',
  styleUrls: ['./form-cadastro.component.scss'],
})
export class FormCadastroComponent implements OnInit {

  private formCad: FormGroup;
  errorMessage: string = '';
  successMessage: string = '';

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

  isSenha: boolean;

  constructor(private formBuilder: FormBuilder,
    public toastController: ToastController,
    private authService: AuthService) {
    this.formCad = this.formBuilder.group({
      email: ['', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])],
      nome: ['', Validators.compose([
        Validators.required
      ])],
      senha: ['', Validators.compose([
        Validators.required,
        Validators.minLength(6)
      ])]
    });
  }

  ngOnInit() { }

  async presentToast(msg: string) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }

  tratarErros(errorCode: string) {
    switch (errorCode) {
      case 'auth/weak-password':
        this.presentToast('A senha deve ter pelo menos 6 caracteres');
        break;
      case 'auth/invalid-email':
        this.presentToast('E-mail inválido.');
        break;
      case 'auth/email-already-in-use':
        this.presentToast('O endereço de e-mail já está sendo usado por outra conta.');
        break;
    }

  }

  tryRegister(value) {
    this.authService.registerUser(value)
      .then(res => {
        this.authService.atualizarDadosUsuario(value.nome);
      }, err => {
        this.tratarErros(err.code)
      })
  }

  onClick() {
    this.tryRegister(this.formCad.value)
  }

  togglePasswordFieldType() {
    this.isSenha = !this.isSenha;
  }

}
