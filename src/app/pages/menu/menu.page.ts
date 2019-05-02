import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  private nomeUsuario = '';
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
    }
  ]

  constructor(private authService: AuthService) { }

  ngOnInit() {
    console.log(this.authService.userDetails().email)
    console.log(this.authService.userDetails().displayName)
    this.nomeUsuario = this.authService.userDetails().displayName;
    this.emailUsuario = this.authService.userDetails().email;
  }

}
