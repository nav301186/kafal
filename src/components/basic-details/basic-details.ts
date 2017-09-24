import { Component } from '@angular/core';

/**
 * Generated class for the BasicDetailsComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'basic-details',
  templateUrl: 'basic-details.html'
})
export class BasicDetailsComponent {

  text: string;

  constructor() {
    console.log('Hello BasicDetailsComponent Component');
    this.text = 'Hello World';
  }

}
