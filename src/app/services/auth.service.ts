import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import { NavController, ToastController } from '@ionic/angular';
import { UtilsComponent } from '../components/utils/utils.component';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public navCtrl: NavController) { }

  registerUser(value) {
    return new Promise<any>((resolve, reject) => {
      firebase.auth().createUserWithEmailAndPassword(value.email, value.senha)
        .then(function (res) {
          resolve(res)
        }, function (err) {
          reject(err)
        })
    })
  }

  loginUser(value) {
    return new Promise<any>((resolve, reject) => {
      firebase.auth().signInWithEmailAndPassword(value.email, value.senha)
        .then(function (res) {
          resolve(res);
        }, function (err) {
          reject(err);
        })
    })
  }

  logoutUser() {
    return new Promise((resolve, reject) => {
      if (firebase.auth().currentUser) {
        firebase.auth().signOut()
          .then(() => {
            this.navCtrl.navigateRoot('/');
            resolve();
          }).catch((error) => {
            reject();
          });
      }
    })
  }

  userDetails() {
    return firebase.auth().currentUser;
  }

  atualizarDadosUsuario(nome: string) {
    var user = firebase.auth().currentUser;

    return user.updateProfile({
      displayName: nome
    }).then(function () {
      // Update successful.
    }).catch(function (error) {
      // An error happened.
    });
  }

  sendPasswordResetEmail(emailAddress: string, callback) {
    return firebase.auth().sendPasswordResetEmail(emailAddress).then(function (e) {
      callback();
    }).catch(function (error) {
      console.log(error)
      // An error happened.
    });
  }

  updatePassword(newPassword: string) {
    var user = firebase.auth().currentUser;

    user.updatePassword(newPassword).then(function () {
      // Update successful.
    }).catch(function (error) {
      // An error happened.
    });
  }

}
