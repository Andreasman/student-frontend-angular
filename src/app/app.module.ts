import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {MyLabComponent} from './my-lab/my-lab.component';
import {StudentListComponent} from './student-list/student-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MyLabComponent,
    StudentListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
