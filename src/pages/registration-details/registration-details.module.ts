import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RegistrationDetailsPage } from './registration-details';

@NgModule({
  declarations: [
    RegistrationDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(RegistrationDetailsPage),
  ],
})
export class RegistrationDetailsPageModule {}
