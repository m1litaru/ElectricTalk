import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  private user = {
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  };
  constructor() { }

  ngOnInit() {
  }

  register(){
    console.log(this.user)
    axios({
      method: 'post',
      url: 'http://192.168.6.62:5060/api/Auth/Register',
      data: {
        firstName: this.user.firstName,
        lastName: this.user.lastName,
        email: this.user.email,
        password: this.user.password
      }
    });
  }

}
