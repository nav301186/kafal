import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AgePage } from './age';

@NgModule({
  declarations: [
    AgePage,
  ],
  imports: [
    IonicPageModule.forChild(AgePage),
  ],
})
export class AgePageModule {}
