import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  private user = {
    email: "",
    password: ""
  };
  constructor(private http: HttpClient, public navCtrl: NavController,  public storage: Storage) { }

  ngOnInit() {
  }

  goToPage(path: string) {
    this.navCtrl.navigateForward(path);
  }

  loginRequest(){
    console.log(this.user)
    let data_register = {
      email: this.user.email,
      password: this.user.password
    }
    let header_register = {
      headers: new HttpHeaders({
        "accept": "text/plain",
        'TEAM_KEY': "BA7HSEYKGEGFY",
        'Content-Type': 'application/json-patch+json'
      })
    }

    this.http.post("/api/Auth/Login", data_register ,header_register)
    .subscribe(data => {
      console.log(data);
      this.storage.set("token",data['token']);
      this.goToPage('/list');
    }, error => {
      console.log(error);
    });
  }
}
