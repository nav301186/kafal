import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {ProfilePage} from '../profile/profile';
import {SearchPage} from '../search/search';
import {MePage} from '../me/me';
import {NotificationsPage} from '../notifications/notifications';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
    tab1Root= SearchPage;
    tab2Root= MePage;
    tab3Root= NotificationsPage;

    constructor() {
  }

}
