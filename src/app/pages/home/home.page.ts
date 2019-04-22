import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll, NavController } from '@ionic/angular';
import { Agendamento } from './../../services/agendamento.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  // _agendamentos = Agendamento;
  agendamentos = [];
  totalAgentamento = 1;

  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  constructor(private navCtrl: NavController) {
    this.agendamentos = [
      {
        id: 13,
        servico: 'Barba',
        data: '30/04/2019',
        horario: '16h40',
        barbeiro: 'Anderson Moroni'
      },
      {
      id: 1,
      servico: 'Barba',
      data: '30/04/2019',
      horario: '16h40',
      barbeiro: 'Renato 1'
    },
    {
      id: 2,
      horario: '16h40',
      barbeiro: 'Junior 2',
      data: '30/05/2019',
      servico: 'Barba e Cabelo'
    },
    {
      id: 3,
      servico: 'Barba',
      data: '30/04/2019',
      horario: '16h40',
      barbeiro: 'Renato 3'
    },
    {
      id: 4,
      horario: '16h40',
      barbeiro: 'Junior 4',
      data: '30/05/2019',
      servico: 'Barba e Cabelo'
    },
    {
      id: 5,
      horario: '16h40',
      barbeiro: 'Junior 5',
      data: '30/05/2019',
      servico: 'Barba e Cabelo'
    },
    {
      id: 6,
      horario: '16h40',
      barbeiro: 'Junior 6',
      data: '30/05/2019',
      servico: 'Barba e Cabelo'
    },
    {
      id: 7,
      horario: '16h40',
      barbeiro: 'Junior 7',
      data: '30/05/2019',
      servico: 'Barba e Cabelo'
    },
    {
      id: 8,
      horario: '16h40',
      barbeiro: 'Junior 8',
      data: '30/05/2019',
      servico: 'Barba e Cabelo'
    },
    {
      id: 9,
      horario: '16h40',
      barbeiro: 'Junior 10',
      data: '30/05/2019',
      servico: 'Barba e Cabelo'
    },
    {
      id: 11,
      horario: '16h40',
      barbeiro: 'Junior 11',
      data: '30/05/2019',
      servico: 'Barba e Cabelo'
    },
    {
      id: 12,
      horario: '16h40',
      barbeiro: 'Junior 12',
      data: '30/05/2019',
      servico: 'Barba e Cabelo'
    }
    ]
    this.totalAgentamento += this.agendamentos.length
  }

  loadData(event) {
    setTimeout(() => {
      console.log('Done');
      event.target.complete();
      if (this.agendamentos.length === 1000) {
        console.log('aqyu');
        event.target.disabled = true;
      }
    }, 500);
  }

  toggleInfiniteScroll() {
    this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
  }

  onClickAgendamento() {
    this.navCtrl.navigateRoot('/menu/agendamento');
  }

  ngOnInit() { }

}
