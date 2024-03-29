import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GooglePlus } from '@ionic-native/google-plus/ngx';

@Injectable({
  providedIn: 'root'
})
export class LoginGoogleService {

  user: Observable<firebase.default.User>;
  userLocal;

  constructor(
    public angularFireAuth: AngularFireAuth,
    private googlePlus: GooglePlus
  ) {
    this.user = this.getCurrentUser();
  }

  getCurrentUser(): Observable<firebase.default.User> {
    return this.angularFireAuth.authState.pipe(
      map(user => {
        this.userLocal = user;
        return user;
      }));
  }

  async loginWithGoogle() {
    try {
      const googleData = await this.loginAndgetGoogleToken();
      const googleCredential = firebase.default.auth.GoogleAuthProvider.credential(googleData.idToken, googleData.accessToken);

      return this.angularFireAuth.signInWithCredential(googleCredential);
    } catch (error) {
      console.error(error);

      throw error;
    }
  }

  async loginAndgetGoogleToken() {
    try {
      const data = await this.googlePlus.login({
        webClientId: '764679065998-5u5kao1h5i5op8hl35i18ojf7m46kpd4.apps.googleusercontent.com', //  webclientID 'string'
        offline: true
      });

      return data;
    } catch (error) {
      console.error(error);

      throw error;
    }
  }
}
