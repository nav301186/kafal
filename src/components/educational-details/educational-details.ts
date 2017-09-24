import { Component } from '@angular/core';

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

  text: string;

  constructor() {
    console.log('Hello EducationalDetailsComponent Component');
    this.text = 'Hello World';
  }

}
