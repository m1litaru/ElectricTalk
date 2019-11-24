import { Component, OnInit } from '@angular/core';
import { Car } from '../../models/car';
import { NavController, AngularDelegate } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-edit-car',
  templateUrl: './edit-car.page.html',
  styleUrls: ['./edit-car.page.scss'],
})
export class EditCarPage implements OnInit {
  private myToken: string = "";
  private myCarId: string = "";
  private car: Car = {
    model: "",  
    company: '',
    year: 2019,
    autonomy: 0,
    batteryLeft: 0.25,
    lastTechRevision: new Date().toLocaleDateString(),
    userId: '',
    id: '',
    icon: ''
  }

  constructor(
    private http: HttpClient,
    private navCtrl: NavController,
    private storage: Storage
    ) {}

  ngOnInit() {
    this.carEditGET();
  }

  ionViewWillEnter(){
    
  }

  carEditGET() {
    this.storage.get("token")
    .then(token => {
      this.myToken = token;
      let header_register = {
        headers: new HttpHeaders({
          "accept": "application/json",
          "Authorization": "Bearer " + token,
          'TEAM_KEY': "BA7HSEYKGEGFY"
        })
      }
      this.storage.get("carId")
      .then(carId => {
        this.myCarId = carId;
          this.http.get("/api/Cars/" + carId, header_register)
          .subscribe(data => {
              this.car.model = data['model'];
              this.car.company = data['company'];
              this.car.year = data['year'];
              this.car.autonomy = data['autonomy'];
              this.car.batteryLeft = data['batteryLeft'];
              this.car.lastTechRevision = new Date(data['lastTechRevision']).toLocaleDateString();
          }, error => {
          console.log(error);
        });
      })
    });
  }

  carEditPOST(){
    let data_car = {
      model:  this.car.model,
      company:this.car.company,
      year: this.car.year,
      autonomy: this.car.autonomy,
      batteryLeft: this.car.batteryLeft,
      lastTechRevision: this.car.lastTechRevision
    }
    let header_car = {
      headers: new HttpHeaders({
        'accept': 'application/json',
        'Authorization': "Bearer " + this.myToken,
        'TEAM_KEY': "BA7HSEYKGEGFY"
      })
    }
    
    this.http.patch("/api/Cars/" + this.myCarId, data_car ,header_car)
    .subscribe(data => {
      console.log(data);
      this.navCtrl.navigateForward('/list');
    }, error => {
      console.log(error);
    });
  }

  carDelete(){
    let header_car = {
      headers: new HttpHeaders({
        'accept': 'application/json',
        'Authorization': "Bearer " + this.myToken,
        'TEAM_KEY': "BA7HSEYKGEGFY"
      })
    }
    
    this.http.delete("/api/Cars/" + this.myCarId, header_car)
    .subscribe(data => {
      console.log(data);
      this.navCtrl.navigateForward('/list');
    }, error => {
      console.log(error);
    });
  }

}
