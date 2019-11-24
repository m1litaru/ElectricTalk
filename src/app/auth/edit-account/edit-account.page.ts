import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-edit-account',
  templateUrl: './edit-account.page.html',
  styleUrls: ['./edit-account.page.scss'],
})
export class EditAccountPage implements OnInit {

  private myToken: string = "";
  private user = {
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  };

  constructor(private http: HttpClient, private navCtrl: NavController, private storage: Storage) { }

  ionViewWillEnter() {
    this.editAccountInfo();
  }
  
  ngOnInit(){}

  editAccountInfo() {
    this.storage.get("token")
    .then(token => {
      this.myToken = token;
      let header_register = {
        headers: new HttpHeaders({
          "accept": "application/json",
          "Authorization": "Bearer " + token,
          'TEAM_KEY': "BA7HSEYKGEGFY"
        })
      }

      this.http.get("/api/Auth/Me", header_register)
        .subscribe(data => {
          this.user.email = data['email'];
          this.user.password = data['password'];
          this.user.firstName = data['firstName'];
          this.user.lastName = data['lastName'];
          console.log(this.user);
        }, error => {
        console.log(error);
      });
    });
  }

  updateInfo(){
    console.log("mmm")
    let data_register = {
      firstName: this.user.firstName,
      lastName: this.user.lastName
    }
    let header_register = {
      headers: new HttpHeaders({
        "accept": "text/plain",
        'Authorization': 'Bearer ' + this.myToken,
        'TEAM_KEY': "BA7HSEYKGEGFY",
        'Content-Type': 'application/json-patch+json'
      })
    }
    this.http.post("/api/Auth/Update", data_register ,header_register)
    .subscribe(data => {
      this.navCtrl.navigateForward('/list');
      this.storage.set("name", data['firstName'].toString() + " " + data['lastName'].toString());
    }, error => {
      console.log(error);
    });
  }

}
