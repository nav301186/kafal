import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams} from 'ionic-angular';
import {LoginFormPage} from '../login-form/login-form';
import {RegistrationDetailsPage} from '../registration-details/registration-details';
/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {


    constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

    doLogin() {
        this.navCtrl.push(LoginFormPage)
    }

    register(){
        this.navCtrl.push(RegistrationDetailsPage);
    }
}
