import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Storage } from '@ionic/storage';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Md5 } from 'ts-md5/dist/md5';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public gravatarUrl: string = "";
  public userName: string = "";
  public link: string = "https://s.gravatar.com/avatar/1c3245e1fc158558fdae158bd52355d2?s=80";
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
    private navCtrl: NavController
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.obtainGravatar();
    });
  }

  obtainGravatar() {
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

          if(data['firstName'] != undefined && data['lastName'] != undefined) {
            // this.userName = data['firstName'].toString() + " " + data['lastName'].toString();
            this.storage.set("name", data['firstName'].toString() + " " + data['lastName'].toString());
            this.storage.get("name").then( name => {
              this.userName = name;
            })
          }
          
          if(data['email'] != undefined) {
            this.gravatarUrl = "https://www.gravatar.com/avatar/" + Md5.hashStr(data['email']).toString();
            console.log(this.gravatarUrl);
          }
        }, error => {
        console.log(error);
      });
    });
  }
  
  goToPage(path: string){
    this.navCtrl.navigateForward(path);
  }
  
}