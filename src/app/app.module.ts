import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { Facebook } from '@ionic-native/facebook/ngx';
import { AngularFireModule } from '@angular/fire';

const firebaseConfig = {
  apiKey: 'AIzaSyA9YmyVbmUAsZo6zWIBQVsUrTq3qYCSGfU',
  authDomain: 'humobu-ac7ac.firebaseapp.com',
  databaseURL: 'https://humobu-ac7ac.firebaseio.com',
  projectId: 'humobu-ac7ac',
  storageBucket: 'humobu-ac7ac.appspot.com',
  messagingSenderId: '860920003624',
  appId: '1:860920003624:web:d36dcd1760405e39b1491d',
  measurementId: 'G-Q50MKFTDP7'
};

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    Facebook
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
