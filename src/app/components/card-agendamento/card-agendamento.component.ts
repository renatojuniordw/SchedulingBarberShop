import { Component, OnInit, Input } from '@angular/core';
import { AlertController, ActionSheetController, ModalController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { ModalPage } from 'src/app/pages/modal/modal.page';

@Component({
  selector: 'app-card-agendamento',
  templateUrl: './card-agendamento.component.html',
  styleUrls: ['./card-agendamento.component.scss'],
})
export class CardAgendamentoComponent implements OnInit {

  constructor(public alertController: AlertController,
    public actionSheetController: ActionSheetController,
    public toastController: ToastController,
    private modalController: ModalController) { }

  @Input() agendamentos: string;

  ngOnInit() { }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Agendameto excluido com sucesso.',
      duration: 2000
    });
    toast.present();
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Cancelar Agendamento',
      // subHeader: '',
      message: 'Deseja cancelar o agendamento?',
      buttons: [
        {
          text: 'Sim',
          handler: () => {
            this.presentToast()
            console.log('Favorite clicked');
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

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Agendamento',
      buttons: [{
        text: 'Cancelar',
        role: 'destructive',
        icon: 'close-circle',
        handler: () => {
          this.presentAlert();
          console.log('Delete clicked');
        }
      }, {
        text: 'Editar',
        icon: 'create',
        handler: () => {
          this.openModal()
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

  async openModal() {
    const modal = await this.modalController.create({
      component: ModalPage,
      componentProps: { value: 123 }
    });

    return await modal.present();
  }

}
