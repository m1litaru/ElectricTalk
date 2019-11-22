import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {

  constructor(public navCtrl: NavController) {

  }

  goToPage(path: string){
    this.navCtrl.navigateForward(path);
  }
  ngOnInit() {
  }

}
