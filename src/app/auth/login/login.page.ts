import { Component, OnInit } from '@angular/core';
import axios from 'axios';

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
  constructor() { }

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

}
