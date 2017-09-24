import { Component } from '@angular/core';

/**
 * Generated class for the AgeComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'age',
  templateUrl: 'age.html'
})
export class AgeComponent {

  text: string;

  constructor() {
    console.log('Hello AgeComponent Component');
    this.text = 'Hello World';
  }

}
