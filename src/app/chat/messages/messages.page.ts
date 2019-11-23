import { Component, OnInit } from '@angular/core';
import { Message } from 'src/app/models/Message';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.page.html',
  styleUrls: ['./messages.page.scss'],
})
export class MessagesPage implements OnInit {

  public icon: string = "list";
  public messages: Array<Message> = [];
  constructor() {
    for (let i = 1; i < 15; i++) {
      this.messages.push({
        title: "Adi" + i,
        content: "ambnc"
      });
    } 
  }

  ngOnInit() {
  }

}
