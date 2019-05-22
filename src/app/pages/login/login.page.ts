import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private navCtrl: NavController, private auht: AuthService) { }

  ngOnInit() {
  }

  pushPageCad() {
    // this.navCtrl.navigateRoot('/cadastrar');
    this.navCtrl.navigateForward('/cadastrar');
  }

  onClickRecuperarSenha() {
    this.navCtrl.navigateForward('/recuperar-senha');
  }

}
