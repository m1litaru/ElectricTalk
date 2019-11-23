import { Component, OnInit } from '@angular/core';
import { Car } from '../../models/car';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-edit-car',
  templateUrl: './edit-car.page.html',
  styleUrls: ['./edit-car.page.scss'],
})
export class EditCarPage implements OnInit {

  private car: Car = {
    model: "aaa",  
    company: 'BMW',
    year: 2019,
    autonomy: 0,
    batteryLeft: 0.25,
    lastTechRevision: new Date().toLocaleDateString(),
    userId: 'mmm',
    id: 'myId',
    icon: 'car'
  }

  constructor(public navCtrl: NavController) { 
  }

  ngOnInit() {
  }

  saveTodo(){
    this.navCtrl.navigateForward('/list');
  }
}
