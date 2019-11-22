import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Car } from 'src/app/models/car';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  private selectedItem: any;
  public cars: Array<Car> = [];
  constructor(public navCtrl: NavController) {
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

  goToPage(path: string) {
    this.navCtrl.navigateForward(path);
  }

  ngOnInit() {
  }
  // add back when alpha.4 is out
  // navigate(item) {
  //   this.router.navigate(['/list', JSON.stringify(item)]);
  // }
}
