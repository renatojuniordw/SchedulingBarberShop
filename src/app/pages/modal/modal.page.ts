import { Component, OnInit, ɵConsole, Input } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';
import { AgendamentoService } from 'src/app/services/agendamento.service';
import { ServicosService } from 'src/app/services/servicos.service';
import { BarbeirosService } from 'src/app/services/barbeiros.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  @Input() value: string;
  private barbeiros = [];
  private servicos = [];

  constructor(private navParams: NavParams,
    private modalController: ModalController,
    private agendamentoService: AgendamentoService,
    private serviceServicos: ServicosService,
    private serviceBarbeiros: BarbeirosService) {
    this.agendamentoService.conexaoFirebase();
  }

  ngOnInit() {
    this.getDadosAgendamento();
    this.getBarbeiros();
    this.getServicos();
  }

  getDadosAgendamento() {
    this.agendamentoService.getAgendamentoPorId(this.value).subscribe(
      (item) => {
        console.log(item)
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
}
