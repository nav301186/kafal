import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import {BasicDetails} from '../../domain/basic-details';
import {AgePage} from '../age/age';
import {EducationalDetails} from '../../domain/educational-details';

/**
 * Generated class for the MePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-me',
  templateUrl: 'me.html',
})
export class MePage {

    basic_details: BasicDetails = new BasicDetails();
    educational_details: EducationalDetails = new EducationalDetails();

    constructor(public modalCtrl : ModalController, public navCtrl: NavController, public navParams: NavParams) {
      this.basic_details.name = "erin";
      this.basic_details.age = 23;
      this.basic_details.current_city = "Pune";
      this.basic_details.gender = "female";

      this.educational_details.graduation = "GBPEC";
      this.educational_details.intermediate = "Doon international school";
      this.educational_details.senior_secondary = "Doon international school";

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MePage');
  }
    onEdit(){
        console.log("inside on edit event");
        let modal = this.modalCtrl.create(AgePage)
        modal.present();
    }

}

