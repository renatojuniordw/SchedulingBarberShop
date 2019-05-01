import { Injectable, OnInit } from '@angular/core';
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

export class AgendamentoService implements OnInit {

  private oAgendamentos: Observable<iAgendamento[]>;
  private agendamentoCollection: AngularFirestoreCollection<iAgendamento>;

  constructor(private db: AngularFirestore) {
    this.conexaoFirebase();
  }

  ngOnInit() {
    this.conexaoFirebase();
  }


  conexaoFirebase() {
    this.agendamentoCollection = this.db.collection<iAgendamento>('agendamentos');
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
    this.conexaoFirebase();
    return this.oAgendamentos;
  }

  getAgendamentoPorId(id: string): Observable<iAgendamento> {
    this.conexaoFirebase();
    return this.agendamentoCollection.doc<iAgendamento>(id).valueChanges().pipe(
      take(1),
      map(item => {
        item.id = id;
        return item
      })
    )
  }

  novoAgendamento(item: iAgendamento): Promise<DocumentReference> {
    this.conexaoFirebase();
    return this.agendamentoCollection.add(item);
  }

  atualizarAgendamento(id: string, itemUp: any): Promise<void> {
    this.conexaoFirebase();
    return this.agendamentoCollection.doc(id).update(itemUp);
  }

  // atualizarAgendamento(item: iAgendamento, itemUp: any): Promise<void> {
  //   this.conexaoFirebase();
  //   return this.agendamentoCollection.doc(item.id).update(itemUp);
  // }

  deletarAgendamento(id: string): Promise<void> {
    this.conexaoFirebase();
    return this.agendamentoCollection.doc(id).delete();
  }

}
