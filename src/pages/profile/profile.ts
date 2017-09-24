import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams , ToastController} from 'ionic-angular';
import {ChatWindowPage} from '../chat-window/chat-window';

/**
 * Generated class for the ProfilePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-profile',
    templateUrl: 'profile.html',
})
export class ProfilePage {
    @ViewChild('intbtn') intBtn: any;

    details: string = "persnal";

    constructor(public toastCtrl: ToastController,public navCtrl: NavController, public navParams: NavParams) {
    }

    onSendMessage(){
        this.navCtrl.push(ChatWindowPage);
    }

    sendInteresteRequest() {

        let interestedToast: any = this.toastCtrl.create(
            {
                message: "A request has been send to the user",
                duration: 3000,
                position: 'top'
            }
        );
        interestedToast.present();
    }
}
