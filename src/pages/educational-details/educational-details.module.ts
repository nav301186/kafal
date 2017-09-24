import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EducationalDetailsPage } from './educational-details';

@NgModule({
  declarations: [
    EducationalDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(EducationalDetailsPage),
  ],
})
export class EducationalDetailsPageModule {}
