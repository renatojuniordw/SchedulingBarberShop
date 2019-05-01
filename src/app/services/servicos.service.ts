import { Injectable, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { iServicos } from './iServicos';

@Injectable({
  providedIn: 'root'
})

export class ServicosService implements OnInit {

  private oServicos: Observable<iServicos[]>;
  private ServicosCollection: AngularFirestoreCollection<iServicos>;

  constructor(private db: AngularFirestore) { this.conexaoFirebase() }

  ngOnInit() {
    this.conexaoFirebase();
  }

  conexaoFirebase() {
    this.ServicosCollection = this.db.collection<iServicos>('servicos');
    this.oServicos = this.ServicosCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );
  }

  getServicos(): Observable<iServicos[]> {
    this.conexaoFirebase();
    return this.oServicos;
  }
}
