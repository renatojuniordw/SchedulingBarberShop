import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AgendamentoPage } from './agendamento.page';
import { FormAgendamentoComponent } from 'src/app/components/forms/form-agendamento/form-agendamento.component';

const routes: Routes = [
  {
    path: '',
    component: AgendamentoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AgendamentoPage, FormAgendamentoComponent]
})
export class AgendamentoPageModule {}
