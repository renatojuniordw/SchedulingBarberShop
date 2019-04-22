import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-cadastro',
  templateUrl: './form-cadastro.component.html',
  styleUrls: ['./form-cadastro.component.scss'],
})
export class FormCadastroComponent implements OnInit {

  constructor() { }

  private itemCadastro = {};
  isSenha: boolean;

  ngOnInit() { }


  logForm() {
    console.log(this.itemCadastro)
  }

  onClick() { }

  togglePasswordFieldType() {
    this.isSenha = !this.isSenha;
  }

}
