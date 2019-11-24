import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Topic } from 'src/app/models/topic';
import { Message } from 'src/app/models/Message';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-topics',
  templateUrl: './topics.page.html',
  styleUrls: ['./topics.page.scss'],
})
export class TopicsPage implements OnInit {

  public icon: string = "chatbubbles";
  public topics: Array<Topic> = [];
  public messages: Array<Message> = [];
  constructor(
    public navCtrl: NavController, 
    private http: HttpClient,
    private storage: Storage) { 
      this.messages.push({
        title: "Ce faci?",
        content: "Cat mai ai pana la statie?"
      });
      this.messages.push({
        title: "Aloo",
        content: "Cat mai ai pana la statie?"
      });
      this.messages.push({
        title: "Salut!",
        content: "Cate masini electrice ai?"
      });
      this.topics.push({
        title: "Intrebari",
        messages: this.messages
      });
      this.topics.push({
        title: "Combustibil",
        messages: this.messages
      });
      this.topics.push({
        title: "Noutati",
        messages: this.messages
      });
  }

  ngOnInit() {
    // this.viewTopics();
  }

  // viewTopics(){
  //   this.storage.get("token").then(token => {
  //     let header_forum = {
  //       headers: new HttpHeaders({
  //         "accept": "application/json",
  //         'Authorization': 'Bearer ' + token,
  //         'TEAM_KEY': "BA7HSEYKGEGFY"
  //       })}

  //       this.http.get('/api/Forum/Topics', header_forum)
  //       .subscribe(data  => {
  //         let list = Object.values(data);
  //         console.log(data)
  //         list.forEach(topic => {
  //           this.topics.push(topic);
  //         });
  //       },error => {
  //         console.log(error);
  //       });
  //   });
  // }

  goToPage(path: string) {
    this.navCtrl.navigateForward(path);
  }

}
