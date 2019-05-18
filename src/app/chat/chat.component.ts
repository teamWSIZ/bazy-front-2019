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

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  reloadMessages() {
    const url = 'http://localhost:3003/messages';
    console.log(`calling ${url}`);
    this.http.get<Message[]>(url)
      .subscribe(res => {
        this.messages = res;
      });
  }
}
