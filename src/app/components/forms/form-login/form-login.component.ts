import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
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
        console.log(res);
        this.errorMessage = "";
        // this.navCtrl.navigateRoot('/menu/home');
        this.navCtrl.navigateForward('/menu/home');
      }, err => {
        this.errorMessage = err.message;
      })
  }

  togglePasswordFieldType() {
    this.isSenha = !this.isSenha;
  }

}
