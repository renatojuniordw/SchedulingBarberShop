import { Component, OnInit } from '@angular/core';
import { AgendamentoService } from 'src/app/services/agendamento.service';
import { BarbeirosService } from 'src/app/services/barbeiros.service';
import { ServicosService } from 'src/app/services/servicos.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-form-agendamento',
  templateUrl: './form-agendamento.component.html',
  styleUrls: ['./form-agendamento.component.scss'],
})
export class FormAgendamentoComponent implements OnInit {

  private anoMin = new Date().getFullYear();
  private barbeiros = [];
  private servicos = [];
  private formAgendamento: FormGroup;

  constructor(private serviceServicos: ServicosService, private serviceBarbeiros: BarbeirosService,
    private formBuilder: FormBuilder, private serviceAgendamento: AgendamentoService,
    public alertController: AlertController, private navCtrl: NavController) {

    this.formAgendamento = this.formBuilder.group({
      barbeiro: ['', Validators.required],
      servico: ['', Validators.required],
      data: ['', Validators.required],
      hora: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.getBarbeiros();
    this.getServicos();
  }


  onClick() {
    this.serviceAgendamento.novoAgendamento(this.formAgendamento.value).then((item) => {
      this.presentAlert();
      this.formAgendamento.reset();
    });
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Salvo com sucesso!',
      message: 'Seu agendamento foi realizado com sucesso.',
      buttons: [{
        text: 'OK',
        handler: () => {
          this.navCtrl.navigateRoot('/menu/home');
        }
      }]
    });

    await alert.present();
  }

  getServicos() {
    this.serviceServicos.getServicos().subscribe(
      (item) => {
        this.servicos = item.sort();
      });
  }

  getBarbeiros() {
    this.serviceBarbeiros.getBarbeiros().subscribe(
      (item) => {
        this.barbeiros = item.sort();
      });
  }

}
