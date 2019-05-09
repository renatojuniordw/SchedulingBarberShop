import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll, NavController } from '@ionic/angular';
import { AgendamentoService, iAgendamento } from 'src/app/services/agendamento.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  private totalAgentamento = 0;
  private agendamentos: iAgendamento[];

  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  constructor(private navCtrl: NavController, private agendamentoService: AgendamentoService) {
    agendamentoService.conexaoFirebase();
  }

  scrollInfinito(event) {
    setTimeout(() => {
      event.target.complete();
      if (this.agendamentos.length === 1000) {
        event.target.disabled = true;
      }
    }, 500);
  }

  toggleInfiniteScroll() {
    this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
  }

  onClickAgendamento() {
    this.navCtrl.navigateForward('/menu/agendamento');
    // this.navCtrl.navigateRoot('/menu/agendamento');
  }

  ngOnInit() {
    this.loadAgendamentos()
  }

  loadAgendamentos() {
    this.agendamentoService.getAgendamentos().subscribe(
      (item) => {
        this.totalAgentamento = 0;
        this.agendamentos = item;
        this.totalAgentamento += this.agendamentos.length;
      });
  }

}
