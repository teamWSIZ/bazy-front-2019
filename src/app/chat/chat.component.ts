import {Component, OnInit} from '@angular/core';
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
  ascend = 1;
  soughtTitle: string;


  constructor(private http: HttpClient) {
  }

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
    this.http.post(this.url, this.editedMessage).subscribe(m => {
      console.log('saved OK');
    });
  }

  deleteMessage(id: number) {
    console.log(`deleting message with id=${id}`);
    this.http.delete(this.url + '/' + id)
      .subscribe(f => {
        console.log('deleted OK');
      })
  }

  shorten(str: string, len: number) {
    if (str === undefined || str === null) return '';
    if (str.length < len) return str;
    else return str.substring(0, len) + '(...)'
  }

  addMessage() {
    //
    this.editedMessage = new Message();
  }


  sortMessagesBy(field: string) {
    this.messages.sort((a, b) => {
      return this.ascend * (a[field] < b[field] ? -1 : 1);
    });
    this.ascend *= -1;
  }


  loadSelected() {
    console.log(`szukanie dla frazy ${this.soughtTitle}`);
    if (this.soughtTitle.length<3) this.reloadMessages();

    const url = 'http://localhost:3003/messages/search?title=' + this.soughtTitle;
    this.http.get<Message[]>(url)
      .subscribe(res => {
        this.messages = res;
      });

  }
}
