import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/models/car';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  private selectedItem: any;
  public cars: Array<Car> = [];
  constructor() {
    for (let i = 1; i < 11; i++) {
      this.cars.push({
        model: "aaa",  
        company: i%4 ? 'BMW' : 'Opel',
        year: 2019,
        autonomy: 0,
        batteryLeft: "25%",
        lastTechRevision: new Date().toLocaleDateString(),
        userId: 'mmm',
        id: 'myId',
        icon: 'car'
      });
    }
  }

  ngOnInit() {
  }
  // add back when alpha.4 is out
  // navigate(item) {
  //   this.router.navigate(['/list', JSON.stringify(item)]);
  // }
}
