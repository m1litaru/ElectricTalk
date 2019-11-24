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
    company: null,
    model: null,  
    year: 2019,
    autonomy: 500,
    batteryLeft: 100,
    lastTechRevision: new Date().toLocaleDateString(),
    userId: '',
    id: '',
    icon: ''
  }
  addCarRequest(){
    this.storage.get("token").then(token => {
      let data_car = {
        company: this.car.company,
        model: this.car.model,
        year: new Date(this.car.year).getFullYear(),
        autonomy: this.car.autonomy,
        lastTechRevision: new Date(this.car.lastTechRevision).toLocaleDateString(),
        batteryLeft: 1
      }

      let header_car = {
        headers: new HttpHeaders({
          "accept": "application/json",
          'Authorization': 'Bearer ' + token,
          'TEAM_KEY': "BA7HSEYKGEGFY"
        })}
        console.log(header_car.headers);

        this.http.post('/api/Cars',data_car, header_car)
        .subscribe(data => {
          console.log("fm");
          this.navCtrl.navigateForward('/list');
        },error => {
          console.log(error);
        });
    },error => {
      console.log(error)});
  }
  ngOnInit() {
  }

}
