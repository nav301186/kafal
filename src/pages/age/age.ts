import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {EducationalDetailsPage} from '../educational-details/educational-details';

/**
 * Generated class for the AgePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-age',
  templateUrl: 'age.html',
})
export class AgePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AgePage');
  }
    showEducationalDetails(){
        this.navCtrl.push(EducationalDetailsPage)
    }
}
 
