import {Injectable} from '@angular/core';
import {Student} from './student';

@Injectable()
export class StudentManagerService {
  students: Student[];

  constructor() {
    this.students = [
      new Student(
        '1', 'Hansi', 'Müller'
      ),
      new Student(
        '2', 'Erika', 'Mustermann'
      ),
      new Student(
        '3', 'Schantal', 'Schuster'
      ),
      new Student(
        '4', 'Jochen', 'Meyer'
      ),
      new Student(
        '5', 'Andreas', 'Staecker'
      )
    ];
  }

  getAll() {
    return this.students;
  }

  getSingle(id) {
    // console.table(this.students);

    return this.students.find(student => student.id === id);
  }
}
