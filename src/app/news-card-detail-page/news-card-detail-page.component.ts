import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ContributionService} from '../services/contribution/contribution.service';
import {Contribution} from '../services/contribution/contribution';
import {Course} from '../services/course/course';
import {AuthenticationService} from '../services/authentication/authentication.service';
import {UserService} from '../services/authentication/user.service';
import {CoursesService} from '../services/course/courses.service';

@Component({
  selector: 'app-news-card-detail-page',
  templateUrl: './news-card-detail-page.component.html',
  styleUrls: ['./news-card-detail-page.component.sass']
})
export class NewsCardDetailPageComponent implements OnInit {

  courseId: number;
  studentId: number;

  contributionsForCourse: Contribution[];
  coursesOfStudent: Course[];

  constructor(private courseService: CoursesService,
              private userService: UserService,
              private contributionService: ContributionService,
              private authService: AuthenticationService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {

      this.courseId = this.activatedRoute.snapshot.params.id;
      this.contributionService.getByAllCourseId(this.courseId).subscribe(contribution => this.contributionsForCourse = contribution);
      console.log('course id: ', this.courseId);

    // else {
    //   this.studentId = this.activatedRoute.snapshot.params.id;
    //   this.userService.getById(this.studentId).subscribe(student => {
    //     this.coursesOfStudent = student.coursesEnrolled;
    //   });
    //   console.log('student courses: ', this.coursesOfStudent);
    // }
  }


}
