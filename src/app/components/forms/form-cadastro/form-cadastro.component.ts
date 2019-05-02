import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { NavController } from '@ionic/angular';

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
    private navCtrl: NavController,
    private authService: AuthService) {
    this.formCad = this.formBuilder.group({
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

  tryRegister(value) {
    this.authService.registerUser(value)
      .then(res => {
        console.log(res);
        this.errorMessage = '';
        this.successMessage = 'Your account has been created. Please log in.';
      }, err => {
        console.log(err);
        this.errorMessage = err.message;
        this.successMessage = ''
      })
  }

  onClick() {
    this.tryRegister(this.formCad.value)
    console.log(this.formCad.value)
  }

  togglePasswordFieldType() {
    this.isSenha = !this.isSenha;
  }

}
