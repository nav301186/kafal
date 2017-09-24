import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AgePage} from '../age/age';
/**
 * Generated class for the RegistrationDetailsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registration-details',
  templateUrl: 'registration-details.html',
})
export class RegistrationDetailsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistrationDetailsPage');
  }

    showNextForm() {
        this.navCtrl.push(AgePage);
    }
}
