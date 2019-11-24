import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from 'src/app/models/user';
import { Category } from 'src/app/models/category';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-forum',
  templateUrl: 'forum.page.html',
  styleUrls: ['forum.page.scss']
})
export class ForumPage implements OnInit {

  public icon: string = "chatbubbles";
  private selectedItem: any;
  public categories: Array<Category> = [];
  constructor(public navCtrl: NavController, private storage: Storage) {
    // for (let i = 1; i < 12; i++) {
    //   this.categories.push({
    //     title: "my new category",
    //     categories: null
    //   })
    // }
  }

  ngOnInit() {
  }
  
  // viewCategories(){
  //   this.storage.get("token").then(token => {
  //     let header_car = {
  //       headers: new HttpHeaders({
  //         "accept": "application/json",
  //         'Authorization': 'Bearer ' + token,
  //         'TEAM_KEY': "BA7HSEYKGEGFY"
  //       })}

  //       this.http.get('/api/Cars', header_car)
  //       .subscribe(data  => {
  //         let list = Object.values(data);
  //         console.log(list)
  //         list.forEach(car => {
  //           car.lastTechRevision = new Date(car.lastTechRevision).toLocaleDateString();
  //           car.icon = car.company == 'BMW' ? this.BMWIcon : car.company == 'Mercedes' ? this.mercedesIcon : this.audiIcon
  //           this.cars.push(car);
  //         });
  //       },error => {
  //         console.log(error);
  //       });
  //   });
  // }

  goToPage(path: string){
    this.navCtrl.navigateForward(path);
  }
}
