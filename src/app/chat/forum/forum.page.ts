import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { User } from 'src/app/models/user';
import { Category } from 'src/app/models/category';

@Component({
  selector: 'app-forum',
  templateUrl: 'forum.page.html',
  styleUrls: ['forum.page.scss']
})
export class ForumPage implements OnInit {
  private icon: string = "chatboxes";
  private selectedItem: any;
  public categories: Array<Category> = [];
  constructor(public navCtrl: NavController) {
    for (let i = 1; i < 11; i++) {
      this.categories.push({
        title: "Category No."+i,
        categories: null
      });
    }
  }

  goToPage(path: string) {
    this.navCtrl.navigateForward(path);
  }

  ngOnInit() {
  }

  // viewCategories(){
  //   this.storage.get("token").then(token => {
  //     let header_forum = {
  //       headers: new HttpHeaders({
  //         "accept": "application/json",
  //         'Authorization': 'Bearer ' + token,
  //         'TEAM_KEY': "BA7HSEYKGEGFY"
  //       })}

  //       this.http.get('/api/Forum/Category', header_forum)
  //       .subscribe(data  => {
  //         let list = Object.values(data);
  //         console.log(data)
  //         list.forEach(category => {
  //           this.categories.push(category);
  //         });
  //       },error => {
  //         console.log(error);
  //       });
  //   });
  // }
  
}
