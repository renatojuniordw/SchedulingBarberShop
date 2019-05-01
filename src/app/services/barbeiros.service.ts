import { Injectable, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface iBarbeiros {
  id: string,
  nome: string
}

@Injectable({
  providedIn: 'root'
})

export class BarbeirosService implements OnInit {

  private oBarbeiros: Observable<iBarbeiros[]>;
  private BarbeirosCollection: AngularFirestoreCollection<iBarbeiros>;

  constructor(private db: AngularFirestore) { this.conexaoFirebase() }

  ngOnInit() {
    this.conexaoFirebase();
  }

  conexaoFirebase() {
    this.BarbeirosCollection = this.db.collection<iBarbeiros>('barbeiros');
    this.oBarbeiros = this.BarbeirosCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );
  }

  getBarbeiros(): Observable<iBarbeiros[]> {
    this.conexaoFirebase();
    return this.oBarbeiros;
  }

}
