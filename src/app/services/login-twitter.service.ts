import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TwitterConnect, TwitterConnectResponse } from '@ionic-native/twitter-connect/ngx';

@Injectable({
  providedIn: 'root'
})
export class LoginTwitterService {

  user: Observable<firebase.default.User>;
  userLocal;

  constructor(
    public angularFireAuth: AngularFireAuth,
    private twitter: TwitterConnect
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

  async loginWithTwitter() {
    try {      
      const twitterToken = await this.loginAndgetTwitterToken();
      const twitterCredential = firebase.default.auth.TwitterAuthProvider.credential(twitterToken.token, twitterToken.secret);
      //1332122415854481409-z9fFbzVRNNFaiojdF7Kvgxef6Zlv3v - AcessToken
      //7pigpjEmkxOb1a2QGWYyfbykoluKP0AUnBYbul7dEdoBF - Acess Token Secret
      return this.angularFireAuth.signInWithCredential(twitterCredential);
    } catch (error) {
      console.error(error);

      throw error;
    }
  }

  async loginAndgetTwitterToken() {
    try {
      console.log('Cheguei aqui...');
      const data = await this.twitter.login();
      console.log(data);

      return data;
    } catch (error) {
      console.error(error);

      throw error;
    }
  }
}
