import {Component, Input, OnInit} from '@angular/core';
import {Student} from '../shared/student';

@Component({
  selector: 'a.sm-student-list-item',
  templateUrl: './student-list-item.component.html',
  styles: []
})
export class StudentListItemComponent implements OnInit {
  @Input() student: Student;

  constructor() {
  }

  ngOnInit() {
  }

}
