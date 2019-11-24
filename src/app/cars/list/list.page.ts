import { Component, OnInit} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NavController, AngularDelegate } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { Car } from 'src/app/models/car';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  
  private BMWIcon: string = "http://www.tradoauc.com/car_motorcycle_image/1537957666175BMW-i8-Exterior-114972.jpg";
  private mercedesIcon: string = "https://www.businessmotoring.co.uk/wp-content/uploads/2018/07/Mercedes-Benz_E_Class_E220_Saloon_2.0_d_194_AMG_Line_4Dr_G-Tronic_Start_Stop_-_2018-07-10_11.43.53.png";
  private audiIcon: string = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXIZ5TTHpNi0mp_QKuKfL2rH9jhr6ChcVhGwEbGw_byrb-HTWI&s";
  public trashIcon: string = "trash";
  public cars: Array<Car> = [];

  constructor(
    private http: HttpClient,
    private navCtrl: NavController,
    private storage: Storage
    ) {
  }

  goToPage(path: string) {
    this.navCtrl.navigateForward(path);
  }
  ngOnInit(){
    
  }

  ionViewWillEnter(){
    this.cars = [];
    this.storage.get("token").then(token => {
      let header_car = {
        headers: new HttpHeaders({
          "accept": "application/json",
          'Authorization': 'Bearer ' + token,
          'TEAM_KEY': "BA7HSEYKGEGFY"
        })}

        this.http.get('/api/Cars', header_car)
        .subscribe(data  => {
          let list = Object.values(data);
          console.log(list)
          list.forEach(car => {
            car.lastTechRevision = new Date(car.lastTechRevision).toLocaleDateString();
            car.icon = car.company == 'BMW' ? this.BMWIcon : car.company == 'Mercedes' ? this.mercedesIcon : this.audiIcon
            this.cars.push(car);
          });
        },error => {
          console.log(error);
        });
    });
  }
  getCarDetails(carId: string){
    this.cars = [];
    this.storage.get("token").then(token => {
      let header_car = {
        headers: new HttpHeaders({
          "accept": "application/json",
          'Authorization': 'Bearer ' + token,
          'TEAM_KEY': "BA7HSEYKGEGFY"
        })}

        this.http.get('/api/Cars/' + carId, header_car)
        .subscribe(data  => {
          console.log(data);
          this.storage.set('carId', data['id']);
          this.navCtrl.navigateForward('/edit-car');
        },error => {
          console.log(error);
        });
    });
  }
}
