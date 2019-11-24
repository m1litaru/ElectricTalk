import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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
  constructor(
    public navCtrl: NavController, 
    private http: HttpClient,
    private storage: Storage) {
  }

  ngOnInit() {
    this.viewCategories();
  }
  
  viewCategories(){
    this.storage.get("token").then(token => {
      let header_forum = {
        headers: new HttpHeaders({
          "accept": "application/json",
          'Authorization': 'Bearer ' + token,
          'TEAM_KEY': "BA7HSEYKGEGFY"
        })}

        this.http.get('/api/Forum/Category', header_forum)
        .subscribe(data  => {
          let list = Object.values(data);
          console.log(data)
          list.forEach(category => {
            this.categories.push(category);
          });
        },error => {
          console.log(error);
        });
    });
  }

  goToPage(path: string){
    this.navCtrl.navigateForward(path);
  }
}
