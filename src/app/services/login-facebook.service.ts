import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook/ngx';

@Injectable({
  providedIn: 'root'
})
export class LoginFacebookService {

  user: Observable<firebase.default.User>;
  userLocal;

  constructor(
    public angularFireAuth: AngularFireAuth,
    private facebook: Facebook
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

  async loginWithFacebook() {
    try {
      const facebookToken = await this.loginAndgetFacebookToken();
      const facebookCredential = firebase.default.auth.FacebookAuthProvider.credential(facebookToken);

      return this.angularFireAuth.signInWithCredential(facebookCredential);
    } catch (error) {
      console.error(error);

      throw error;
    }
  }

  async loginAndgetFacebookToken() {
    try {
      const data = await this.facebook.login(['email']);
      const facebookToken = data.authResponse.accessToken;

      return facebookToken;
    } catch (error) {
      console.error(error);

      throw error;
    }
  }
}
