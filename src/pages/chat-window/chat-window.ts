import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ChatMessage } from '../../domain/chat-message';

/**
 * Generated class for the ChatWindowPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chat-window',
  templateUrl: 'chat-window.html',
})
export class ChatWindowPage {
    message: string = '';

    messages: ChatMessage[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
      this.messages.push(new ChatMessage("hello","self"));
      this.messages.push(new ChatMessage("hello","userId123"));
  }

    onSend(message: string){
        let chatMessage = new ChatMessage(this.message, "self");
        this.messages.push(chatMessage);
        this.message='';
    }

}
