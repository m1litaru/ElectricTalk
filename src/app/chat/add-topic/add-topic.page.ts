import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Topic } from 'src/app/models/topic';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-add-topic',
  templateUrl: './add-topic.page.html',
  styleUrls: ['./add-topic.page.scss'],
})
export class AddTopicPage implements OnInit {

  private topic: Topic = {
    title: "",
    messages: null
  };
  constructor(
    public navCtrl: NavController,
    private http: HttpClient,
    private storage: Storage) { }

  ngOnInit() {
  }

  saveCategory(){
    this.storage.get("token").then(token => {

      let data_topic = {
        title: this.topic.title
      }

      let header_car = {
        headers: new HttpHeaders({
          "accept": "application/json",
          'Authorization': 'Bearer ' + token,
          'TEAM_KEY': "BA7HSEYKGEGFY"
        })}

        this.http.post('/api/Forum/Category/{id}/Topic', data_topic, header_car)
        .subscribe(data => {
          this.navCtrl.navigateForward('/forum');
          console.log(data)
        },error => {
          console.log(error);
        });
    });
  }

}
