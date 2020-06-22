import { NgModule } from '@angular/core';
import { NgOpenSeaMapsNavigatorComponent } from './ng-open-sea-maps-navigator.component';
import { NavigatorMainComponent } from './navigator/navigator-main/navigator-main.component';



@NgModule({
  declarations: [
    NgOpenSeaMapsNavigatorComponent,
    NavigatorMainComponent
  ],
  imports: [
  ],
  exports: [
    NgOpenSeaMapsNavigatorComponent
  ]
})
export class NgOpenSeaMapsNavigatorModule { }
