import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  public nomeUsuario = '';
  private emailUsuario = '';

  pages = [
    {
      title: 'Home',
      url: '/menu/home',
      icon: 'home'
    },
    {
      title: 'Agendar',
      url: '/menu/agendamento',
      icon: 'calendar'
    },
    {
      title: 'Configuração',
      url: '/menu/configuracao',
      icon: 'cog'
    }
  ]

  constructor(private authService: AuthService) {  }

  ngOnInit() {
    this.nomeUsuario = this.authService.userDetails().displayName;
    this.emailUsuario = this.authService.userDetails().email;
  }

  onClickExit() {
    this.authService.logoutUser();
  }

}
