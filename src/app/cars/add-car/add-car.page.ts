import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Car } from '../../models/car';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.page.html',
  styleUrls: ['./add-car.page.scss'],
})
export class AddCarPage implements OnInit {

  constructor(
    public navCtrl: NavController,
    private http: HttpClient,
    private storage: Storage
    ) {}
 
  private car: Car = {
    company: "BMW",
    model: "I8",  
    year: 2019,
    autonomy: 500,
    batteryLeft: 100,
    lastTechRevision: new Date().toLocaleDateString(),
    userId: 'mmm',
    id: 'myId',
    icon: ''
  }
  addCarRequest(){
    this.storage.get("token").then(token => {

      let data_car = {
        company: this.car.company,
        model: this.car.model,
        year: this.car.year,
        autonomy: this.car.autonomy,
        lastTechRevision: this.car.lastTechRevision,
        batteryLeft: 100
      }

      let header_car = {
        headers: new HttpHeaders({
          "accept": "application/json",
          'Authorization': 'Bearer ' + token,
          'TEAM_KEY': "BA7HSEYKGEGFY"
        })}

        this.http.post('/api/Cars',data_car, header_car)
        .subscribe(data => {
          console.log(data);
          this.navCtrl.navigateForward('/list');
        },error => {
          console.log(error);
        });
    });
  }
  ngOnInit() {
  }

}
