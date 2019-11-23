import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Storage } from '@ionic/storage';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [
    {
      title: 'User',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Owned Vehicles',
      url: '/list',
      icon: 'car'
    },
    {
      title: 'Forum',
      url: '/forum',
      icon: 'chatboxes'
    },
    {
      title: 'Stations',
      url: '/stations',
      icon: 'map'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private storage: Storage,
    private http: HttpClient,
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  obtainGravatar() {
    // console.log(md5("dnielhort@gmail.com"));
    this.storage.get("token")
    .then(token => {
      let header_register = {
        headers: new HttpHeaders({
          "accept": "application/json",
          "Authorization": "Bearer " + token,
          'TEAM_KEY': "BA7HSEYKGEGFY"
        })
      }

      this.http.get("/api/Auth/Me", header_register)
        .subscribe(data => {
          console.log(data);
        }, error => {
        console.log(error);
      });
    });
  }
  
}