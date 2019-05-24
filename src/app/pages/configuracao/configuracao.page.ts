import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-configuracao',
  templateUrl: './configuracao.page.html',
  styleUrls: ['./configuracao.page.scss'],
})
export class ConfiguracaoPage implements OnInit {

  constructor() { }

  pages = [
    {
      title: 'Usuário',
      url: '/usuario',
      icon: 'contact'
    },
    {
      title: 'Conta',
      url: '/menu/agendamento',
      icon: 'finger-print'
    },
    {
      title: 'Sobre',
      url: '/menu/configuracao',
      icon: 'cog'
    }
  ]

  ngOnInit() {
  }

  onClickConfig(itemMenu: string) {
    console.log("teste", itemMenu)
  }
}
