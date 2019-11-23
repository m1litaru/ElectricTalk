import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Car } from 'src/app/models/car';
import { loadingController } from '@ionic/core';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  
  private BMWIcon: string = "http://www.tradoauc.com/car_motorcycle_image/1537957666175BMW-i8-Exterior-114972.jpg";
  private mercedesIcon: string = "https://www.businessmotoring.co.uk/wp-content/uploads/2018/07/Mercedes-Benz_E_Class_E220_Saloon_2.0_d_194_AMG_Line_4Dr_G-Tronic_Start_Stop_-_2018-07-10_11.43.53.png";
  private audiIcon: string = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXIZ5TTHpNi0mp_QKuKfL2rH9jhr6ChcVhGwEbGw_byrb-HTWI&s";
  public cars: Array<Car> = [];
  constructor(public navCtrl: NavController) {
    
  }

  loadIcons(){
    for(let i = 1; i < 4; i++) {
      this.cars[i].icon = this.cars[i].company == 'BMW' ? this.BMWIcon : this.cars[i].company == 'Mercedes' ? this.mercedesIcon : this.audiIcon
    }
  }

  goToPage(path: string) {
    this.navCtrl.navigateForward(path);
  }

  ngOnInit() {
    for (let i = 1; i < 4; i++) {
      this.cars.push({
        model: "aaa",  
        company: i%4 ? 'BMW' : 'Mercedes',
        year: 2019,
        autonomy: 0,
        batteryLeft: 0.25,
        lastTechRevision: new Date().toLocaleDateString(),
        userId: 'mmm',
        id: 'myId',
        icon: this.audiIcon
        //icon: this.cars[i].company == 'BMW' ? this.BMWIcon : this.cars[i].company == 'Mercedes' ? this.mercedesIcon : this.audiIcon
      });
    }
    //this.loadIcons();
  }
  // add back when alpha.4 is out
  // navigate(item) {
  //   this.router.navigate(['/list', JSON.stringify(item)]);
  // }
}
