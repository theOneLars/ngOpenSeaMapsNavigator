import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {NgOpenSeaMapsNavigatorModule} from 'ng-open-sea-maps-navigator';

@NgModule({
  declarations: [
    AppComponent
  ],
    imports: [
        BrowserModule,
        NgOpenSeaMapsNavigatorModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
