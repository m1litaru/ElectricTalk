import { Component, OnInit } from '@angular/core';
import { Car } from '../cars/Car';

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
    batteryLeft: "25%",
    lastTechRevision: new Date().toLocaleDateString(),
    userId: 'mmm',
    id: 'myId',
    icon: 'car'
  }

  constructor() { 
  }

  ngOnInit() {
  }

}
