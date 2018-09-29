import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Student} from '../shared/student';
import {StudentManagerService} from '../shared/student-manager.service';

@Component({
  selector: 'sm-student-list',
  templateUrl: './student-list.component.html',
  styles: []
})
export class StudentListComponent implements OnInit {
  students: Student[];
  @Output() showDetailsEvent = new EventEmitter<Student>();

  constructor(private studentManagerService: StudentManagerService) {
  }

  showDetails(student: Student) {
    this.showDetailsEvent.emit(student);
    console.log('showDetailsEvent...');
  }

  ngOnInit() {
    this.students = this.studentManagerService.getAll();
  }

}
