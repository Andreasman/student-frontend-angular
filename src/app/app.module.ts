import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {StudentListComponent} from './student-list/student-list.component';
import {StudentListItemComponent} from './student-list-item/student-list-item.component';
import {StudentDetailsComponent} from './student-details/student-details.component';
import {StudentManagerService} from './shared/student-manager.service';
import {HomeComponent} from './home/home.component';
import {AppRoutingModule} from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    StudentListComponent,
    StudentListItemComponent,
    StudentDetailsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule
  ],
  providers: [StudentManagerService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
