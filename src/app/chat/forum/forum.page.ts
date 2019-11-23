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
  private selectedItem: any;
  public categories: Array<Category> = [];
  constructor(public navCtrl: NavController) {
    for (let i = 1; i < 11; i++) {
      this.categories.push({
        title: "Category No."+i
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
