import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Message} from "../model/message";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.less']
})
export class ChatComponent implements OnInit {
  messages: Message[] = [];
  editedMessage: Message = new Message();
  url = 'http://localhost:3003/messages';


  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  reloadMessages() {
    this.http.get<Message[]>(this.url)
      .subscribe(res => {
        this.messages = res;
      });
  }

  saveMessage() {
    console.log(`saving message ${JSON.stringify(this.editedMessage)}`);
    this.http.post(this.url, this.editedMessage).subscribe(m=>{
      console.log('saved OK');
    });
  }

  shorten(str: string, len: number) {
    if (str.length < len) return str;
    else return str.substring(0,len) + '(...)'
  }
}
