import {Component, OnInit} from '@angular/core';
import {Course} from '../services/course/course';
import {CoursesService} from '../services/course/courses.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-create-course',
  templateUrl: './create-course.component.html',
  styleUrls: ['./create-course.component.sass']
})
export class CreateCourseComponent implements OnInit {

  toSubmit = new Course();

  constructor(private courseService: CoursesService,
              private toastService: ToastrService) {
  }

  ngOnInit() {
  }

  submitCourse() {
    this.courseService.createCourse(this.toSubmit).subscribe(value => {
      console.log(value);
      if (value) {
        this.toastService.success(`Course ${value.title} created!`);
      } else {
        this.toastService.error(`Error creating course ${value.title}!`);
      }
    });
  }
}
