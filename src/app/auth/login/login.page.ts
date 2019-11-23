import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { NavController } from '@ionic/angular';

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
  constructor(public navCtrl: NavController) { }

  ngOnInit() {
  }

  login(){
    console.log(this.user)
    axios({
      method: 'post',
      url: 'http://192.168.6.62:5060/api/Auth/Register',
      data: {
        email: this.user.email,
        password: this.user.password
      }
    });
  }

  goToPage(path: string) {
    this.navCtrl.navigateForward(path);
  }

}
