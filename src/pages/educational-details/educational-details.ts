import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams , ToastController, ViewController} from 'ionic-angular';
import {LoginFormPage} from '../login-form/login-form';

/**
 * Generated class for the EducationalDetailsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-educational-details',
  templateUrl: 'educational-details.html',
})
export class EducationalDetailsPage {

    constructor(private viewCtrl: ViewController,public toastCtrl: ToastController,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EducationalDetailsPage');
  }
    showLoginPage(){

        let interestedToast: any = this.toastCtrl.create(
            {
                message: "registration complete, please check your mail for activation link",
                duration: 3000,
                position: 'top'
            }
        );

        interestedToast.present();
        this.navCtrl.push(LoginFormPage);
    }

    dismiss(){
        console.log("inside dismiss educational-details")
        this.viewCtrl.dismiss();
    }
}
