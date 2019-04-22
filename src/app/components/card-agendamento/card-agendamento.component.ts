import { Component, OnInit, Input } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-card-agendamento',
  templateUrl: './card-agendamento.component.html',
  styleUrls: ['./card-agendamento.component.scss'],
})
export class CardAgendamentoComponent implements OnInit {

  constructor(public alertController: AlertController) { }

  @Input() agendamentos: string;

  ngOnInit() { }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Cancelar Agendamento',
      // subHeader: '',
      message: 'Deseja cancelar o agendamento?',
      buttons: ['Não', 'Sim']
    });

    await alert.present();
  }

}
