import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {  SearchResultPage} from '../search-result/search-result';

/**
 * Generated class for the SearchPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {

    value: any;
    structure: any = {lower: 33, upper: 60}

    public selected_cities: string[] ;

    public cities: any = ["Pune","Delhi", "Banglore","Gurgaon","Dehradun"];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPage');
  }
    onChange(event: any){
        console.log("on change event");
    }
    
    OnSubmit(){
        this.navCtrl.push(SearchResultPage);
    }
}
