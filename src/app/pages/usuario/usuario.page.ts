import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

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

  constructor(private formBuilder: FormBuilder, private authService: AuthService) {
    this.formAlterUser = this.formBuilder.group({
      nome: ['', Validators.compose([
        Validators.required
      ])],
      img: ['', Validators.compose([
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

}
