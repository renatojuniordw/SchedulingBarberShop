import { Component, OnInit, ɵConsole, Input } from '@angular/core';
import { NavParams, ModalController, AlertController } from '@ionic/angular';
import { AgendamentoService } from 'src/app/services/agendamento.service';
import { ServicosService } from 'src/app/services/servicos.service';
import { BarbeirosService } from 'src/app/services/barbeiros.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  @Input() value: string;
  public barbeiros = [];
  public servicos = [];
  public formAgendamento: FormGroup;

  // AJUSTAR ESTE MÉTODO PARA RETORNAR A DATA E HR
  public itensAgendamendo = {
    barbeiro: "",
    servico: "",
    data: "",
    hora: ""
  };

  public anoMin = new Date().getFullYear();

  constructor(public navParams: NavParams,
    public modalController: ModalController,
    public agendamentoService: AgendamentoService,
    public serviceServicos: ServicosService,
    public serviceBarbeiros: BarbeirosService,
    public formBuilder: FormBuilder,
    public alertController: AlertController) {

    this.formAgendamento = this.formBuilder.group({
      barbeiro: ['', Validators.required],
      servico: ['', Validators.required],
      data: ['', Validators.required],
      hora: ['', Validators.required]
    });

  }

  ngOnInit() {
    this.getDadosAgendamento();
    this.getBarbeiros();
    this.getServicos();
  }

  getDadosAgendamento() {
    this.agendamentoService.getAgendamentoPorId(this.value).subscribe(
      (item) => {
        // AJUSTAR ESTE MÉTODO PARA RETORNAR A DATA E HR
        this.itensAgendamendo.barbeiro = item.barbeiro
        // this.itensAgendamendo.hora = item.horario;
        // this.itensAgendamendo.data = item.data;
        this.itensAgendamendo.servico = item.servico;
      });
  }

  fecharModal() {
    this.modalController.dismiss();
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

  onClickEditar() {
    const itemUP = this.formAgendamento.value
    const id: string = this.value;
    this.agendamentoService.atualizarAgendamento(id, itemUP).then(() => {
      this.alert();
    })
  }

  async alert() {
    const alert = await this.alertController.create({
      header: 'Salvo com sucesso!',
      message: 'Seu agendamento foi editado com sucesso.',
      buttons: [{
        text: 'OK',
        handler: () => {
          this.fecharModal();
        }
      }]
    });

    await alert.present();
  }

}
