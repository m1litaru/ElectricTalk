import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Category } from 'src/app/models/category';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.page.html',
  styleUrls: ['./add-category.page.scss'],
})
export class AddCategoryPage implements OnInit {

  private category: Category = {
    title: "",
    categories: null
  };
  constructor(
    public navCtrl: NavController,
    private http: HttpClient,
    private storage: Storage) { }

  ngOnInit() {
  }

  saveCategory(){
    this.storage.get("token").then(token => {

      let data_category = {
        title: this.category.title
      }

      let header_car = {
        headers: new HttpHeaders({
          "accept": "application/json",
          'Authorization': 'Bearer ' + token,
          'TEAM_KEY': "BA7HSEYKGEGFY"
        })}

        this.http.post('/api/Forum/Category', data_category, header_car)
        .subscribe(data => {
          this.navCtrl.navigateForward('/forum');
          console.log(data)
        },error => {
          console.log(error);
        });
    });
  }

}
