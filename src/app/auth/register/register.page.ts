import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  private user = {
    firstName: "qwgq",
    lastName: "gwqq",
    email: "qwq@f.com",
    password: "A@#$FWEFWEgr21"
  };
  constructor(private http: HttpClient, private navCtrl: NavController, private storage: Storage) { }

  ngOnInit() {
  }
  
  registerRequest(){
    let data_register = {
      email: this.user.email,
      password: this.user.password,
      firstName: this.user.firstName,
      lastName: this.user.lastName
    }
    let header_register = {
      headers: new HttpHeaders({
        "accept": "text/plain",
        'TEAM_KEY': "BA7HSEYKGEGFY",
        'Content-Type': 'application/json-patch+json'
      })
    }

    this.http.post("/api/Auth/Register", data_register ,header_register)
    .subscribe(data => {
      this.storage.set("token",data['token']);
      this.navCtrl.navigateForward('/login');
    }, error => {
      console.log(error);
    });
  }
}
