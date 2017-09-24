import { NgModule } from '@angular/core';
import { EducationalDetailsComponent } from './educational-details/educational-details';
import { BasicDetailsComponent } from './basic-details/basic-details';
import { AgeComponent } from './age/age';
@NgModule({
	declarations: [EducationalDetailsComponent,
    BasicDetailsComponent,
    AgeComponent,
    ],
	imports: [],
	exports: [EducationalDetailsComponent,
    BasicDetailsComponent,
    AgeComponent,
]
})
export class ComponentsModule {}
