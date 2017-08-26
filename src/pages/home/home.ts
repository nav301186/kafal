import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {ProfilePage} from '../profile/profile';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
 rootPage: any = ProfilePage;

  constructor(public navCtrl: NavController) {
      this.rootPage = ProfilePage;
  }

}
