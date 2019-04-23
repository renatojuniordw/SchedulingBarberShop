import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-agendamento',
  templateUrl: './form-agendamento.component.html',
  styleUrls: ['./form-agendamento.component.scss'],
})
export class FormAgendamentoComponent implements OnInit {

  anoMin = new Date().getFullYear();
  constructor() { }

  ngOnInit() {}

  onClick(){
    console.log('Agendou');
  }

}
