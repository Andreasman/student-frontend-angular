import {Injectable} from '@angular/core';
import {Student} from './student';

@Injectable()
export class StudentManagerService {
  students: Student[];

  constructor() {
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

  getAll() {
    return this.students;
  }
}
