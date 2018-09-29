import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Student} from '../shared/student';

@Component({
  selector: 'sm-student-list',
  templateUrl: './student-list.component.html',
  styles: []
})
export class StudentListComponent implements OnInit {
  students: Student[];
  @Output() showDetailsEvent = new EventEmitter<Student>();


  showDetails(student: Student) {
    this.showDetailsEvent.emit(student);
    console.log('showDetailsEvent...');
  }

  ngOnInit() {
    this.students = [
      new Student(
        'Hansi', 'Müller'
      ),
      new Student(
        'Erika', 'Mustermann'
      ),
      new Student(
        'Schantal', 'Schuster'
      ),
      new Student(
        'Jochen', 'Meyer'
      ),
      new Student(
        'Andreas', 'Staecker'
      )
    ];
  }

}
