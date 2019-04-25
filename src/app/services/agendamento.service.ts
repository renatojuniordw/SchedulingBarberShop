import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument, DocumentReference } from 'angularfire2/firestore';
import { Time } from '@angular/common';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';


export interface iAgendamento {
  id: string,
  data: Date,
  horario: Time,
  servico: string,
  barbeiro: string,
  status: string
}

@Injectable({
  providedIn: 'root'
})

export class AgendamentoService {

  private oAgendamentos: Observable<iAgendamento[]>;
  private agendamentoCollection: AngularFirestoreCollection<iAgendamento>;

  constructor(private db: AngularFirestore) {
    this.agendamentoCollection = db.collection<iAgendamento>('agendamentos');
    this.oAgendamentos = this.agendamentoCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );
  }

  getAgendamentos(): Observable<iAgendamento[]> {
    // console.log("AgendamentoService " + this.oAgendamentos)
    // this.oAgendamentos.forEach(item=>{
    //   console.log(item)
    // })
    return this.oAgendamentos;
  }

  getAgendamentoPorId(id: string): Observable<iAgendamento> {
    return this.agendamentoCollection.doc<iAgendamento>(id).valueChanges().pipe(
      take(1),
      map(item => {
        item.id = id;
        return item
      })
    )
  }

  novoAgendamento(item: iAgendamento): Promise<DocumentReference> {
    return this.agendamentoCollection.add(item);
  }

  atualizarAgendamento(item: iAgendamento, itemUp: any): Promise<void> {
    return this.agendamentoCollection.doc(item.id).update(itemUp);
  }

  deletarAgendamento(id: string): Promise<void> {
    return this.agendamentoCollection.doc(id).delete();
  }

}
