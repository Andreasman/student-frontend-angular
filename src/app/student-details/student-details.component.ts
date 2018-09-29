import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Student} from '../shared/student';

@Component({
  selector: 'sm-student-details',
  templateUrl: './student-details.component.html',
  styles: []
})
export class StudentDetailsComponent {
  @Input() student: Student;
  @Output() showListEvent = new EventEmitter<any>();

  showStudentList() {
    this.showListEvent.emit();
  }

}
