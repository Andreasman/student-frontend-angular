import {Component} from '@angular/core';
import {Student} from './shared/student';

@Component({
  selector: 'sm-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent {
  title = 'student-manager-angular';
  listOn = true;
  detailsOn = false;
  student: Student;

  showList() {
    this.listOn = true;
    this.detailsOn = false;
  }

  showDetails(student: Student) {
    console.log('showDetails...: ' + student);
    this.student = student;
    this.listOn = false;
    this.detailsOn = true;
  }
}
