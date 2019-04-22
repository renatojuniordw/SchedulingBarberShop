import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Time } from '@angular/common';
import { Observable } from 'rxjs';

export interface Agendamento {
  servico: string,
  data: Date,
  horario: Time,
  barbeiro: string
}

@Injectable({
  providedIn: 'root'
})

export class AgendamentoService {

  private agendamentoCollection: AngularFirestoreCollection<Agendamento>;
  private agendamentos: Observable<Agendamento[]>;

  constructor(db: AngularFirestore) {
    this.agendamentoCollection = db.collection<Agendamento>('agendamentos');

    // this.agendamentos = this.agendamentoCollection.snapshotChanges().pipe(
    //   map(actions => {
    //     return actions.map(a => {
    //       const data = a.payload.doc.data();
    //       const id = a.payload.doc.id;
    //       return { id, ...data }
    //     })
    //   })
    // )
  }

  getAgendamentos() {
    return this.agendamentos;
  }

  getAgendamento(id) {
    return this.agendamentoCollection.doc<Agendamento>(id).valueChanges();
  }

  updateAgendamento(item: Agendamento, id: string) {
    return this.agendamentoCollection.doc(id).update(item)
  }

  addAgendamento(item: Agendamento) {
    return this.agendamentoCollection.add(item);
  }

  removeAgendamento(id) {
    return this.agendamentoCollection.doc(id).delete();
  }

}
