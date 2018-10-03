import {Component, OnInit} from '@angular/core';
import {Student} from '../shared/student';
import {StudentManagerService} from '../shared/student-manager.service';

@Component({
  selector: 'sm-student-list',
  templateUrl: './student-list.component.html',
  styles: []
})
export class StudentListComponent implements OnInit {
  students: Student[];

  constructor(private studentManagerService: StudentManagerService) {
  }

  ngOnInit() {
    this.students = this.studentManagerService.getAll();
  }

}
