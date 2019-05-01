import { Component, OnInit, Input } from '@angular/core';
import { AlertController, ActionSheetController, ModalController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { ModalPage } from 'src/app/pages/modal/modal.page';
import { AgendamentoService } from 'src/app/services/agendamento.service';

@Component({
  selector: 'app-card-agendamento',
  templateUrl: './card-agendamento.component.html',
  styleUrls: ['./card-agendamento.component.scss'],
})
export class CardAgendamentoComponent implements OnInit {

  constructor(public alertController: AlertController,
    public actionSheetController: ActionSheetController,
    public toastController: ToastController,
    private modalController: ModalController,
    private serviceAgendamento: AgendamentoService) { }

  @Input() agendamentos: string;

  ngOnInit() { }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Agendameto excluido com sucesso.',
      duration: 2000
    });
    toast.present();
  }

  excluirAgendamento(id: string) {
    this.serviceAgendamento.deletarAgendamento(id).then(() => {
      this.presentToast();
    })
  }

  async presentAlert(id: string) {
    const alert = await this.alertController.create({
      header: 'Cancelar Agendamento',
      message: 'Deseja cancelar o agendamento?',
      buttons: [
        {
          text: 'Sim',
          handler: () => {
            this.excluirAgendamento(id);

          }
        }, {
          text: 'Não',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    await alert.present();
  }

  async presentActionSheet(idAgendamento: string) {
    const actionSheet = await this.actionSheetController.create({
      header: 'Agendamento',
      buttons: [{
        text: 'Cancelar Agendamento',
        role: 'destructive',
        icon: 'close-circle',
        handler: () => {
          this.presentAlert(idAgendamento);
        }
      }, {
        text: 'Editar Agendamento',
        icon: 'create',
        handler: () => {
          this.openModal(idAgendamento)
          console.log('Share clicked');
        }
      }, {
        text: 'Fechar',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }

  async openModal(idAgendamento: String) {
    const modal = await this.modalController.create({
      component: ModalPage,
      componentProps: { value: idAgendamento }
    });

    return await modal.present();
  }

}
