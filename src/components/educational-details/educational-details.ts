import { Component, Input } from '@angular/core';
import {ModalController} from 'ionic-angular';
import {EducationalDetails} from '../../domain/educational-details';
import {EducationalDetailsPage} from '../../pages/educational-details/educational-details';

/**
 * Generated class for the EducationalDetailsComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'educational-details',
  templateUrl: 'educational-details.html'
})
export class EducationalDetailsComponent {

    @Input() educational_details: EducationalDetails = new EducationalDetails();

  text: string;

    constructor(private modalCtrl: ModalController) {
    console.log('Hello EducationalDetailsComponent Component');
    this.text = 'Hello World';
  }

    onEdit(){
        let modal = this.modalCtrl.create(EducationalDetailsPage);
        modal.present();
    }
}
