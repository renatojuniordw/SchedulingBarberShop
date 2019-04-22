import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.scss'],
})
export class FormLoginComponent implements OnInit {

  isSenha: boolean;

  constructor(public navCtrl: NavController) { }

  ngOnInit() { }

  onClick() {
    this.navCtrl.navigateRoot('/menu/home');
  }

  togglePasswordFieldType() {
    this.isSenha = !this.isSenha;
  }

}
