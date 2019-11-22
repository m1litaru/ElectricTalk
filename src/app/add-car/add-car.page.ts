import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Car } from '../cars/Car';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.page.html',
  styleUrls: ['./add-car.page.scss'],
})
export class AddCarPage implements OnInit {

  private car: Car = {
    model: "",  
    company: "",
    year: 2019,
    autonomy: 0,
    batteryLeft: "25%",
    lastTechRevision: new Date().toLocaleDateString(),
    userId: 'mmm',
    id: 'myId',
    icon: 'car'
  }
  
  constructor(public navCtrl: NavController) {
    //console.log(this.navCtrl)
 }

  addCar(){
    console.log(this.car)
  }

  ngOnInit() {
  }

}
