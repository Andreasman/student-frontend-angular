import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {StudentListComponent} from './student-list/student-list.component';
import {StudentDetailsComponent} from './student-details/student-details.component';
import {HomeComponent} from './home/home.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'students',
    component: StudentListComponent
  },
  {
    path: 'students/:id',
    component: StudentDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {
}
