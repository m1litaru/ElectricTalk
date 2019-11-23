import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Topic } from 'src/app/models/topic';
import { Message } from 'src/app/models/Message';


@Component({
  selector: 'app-topics',
  templateUrl: './topics.page.html',
  styleUrls: ['./topics.page.scss'],
})
export class TopicsPage implements OnInit {

  public icon: string = "chatbubbles";
  public topics: Array<Topic> = [];
  public messages: Array<Message> = [];
  constructor(public navCtrl: NavController) { 
    for (let i = 1; i < 5; i++) {
      this.messages.push({
        title: "Title" + i,
        content: "ambnc"
      });
    } 
    for (let i = 1; i < 11; i++) {
      this.topics.push({
        title: "Adi" + i,
        messages: this.messages
        });
      }
  }

  ngOnInit() {
  }

  goToPage(path: string) {
    this.navCtrl.navigateForward(path);
  }

}
