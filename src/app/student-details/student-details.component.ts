import {Component, OnInit} from '@angular/core';
import {Student} from '../shared/student';
import {StudentManagerService} from '../shared/student-manager.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'sm-student-details',
  templateUrl: './student-details.component.html'
})
export class StudentDetailsComponent implements OnInit {
  student: Student;

  constructor(
    private studentService: StudentManagerService,
    private route: ActivatedRoute) {
  }


  ngOnInit() {
    const params = this.route.snapshot.params;
    console.log(params['id']);
    this.student = this.studentService.getSingle(params['id']);
    console.log(this.student);
  }

}
