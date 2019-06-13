import {Component, OnInit} from '@angular/core';
import {CoursesService} from '../services/course/courses.service';
import {Course} from '../services/course/course';
import {AuthenticationService} from '../services/authentication/authentication.service';
import {UserService} from '../services/authentication/user.service';
import {ContributionService} from '../services/contribution/contribution.service';
import {Contribution} from '../services/contribution/contribution';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-enroll',
  templateUrl: './enroll.component.html',
  styleUrls: ['./enroll.component.sass']
})
export class EnrollComponent implements OnInit {

  courses: Course[];
  contribs: Contribution[];

  constructor(private userService: UserService,
              private courseService: CoursesService,
              private contribService: ContributionService,
              private authService: AuthenticationService,
              private toastService: ToastrService,
              private router: Router) {
  }

  ngOnInit() {
    if (this.userService.isStudentLoggedIn()) {
      this.courseService.getAll().subscribe(courses => this.courses = courses);
    } else {
      this.contribService.getAll().subscribe(value => this.contribs = value);
    }
  }

  enrollToCourse(course: Course) {
    this.courseService.enrollToCourse(course.abbreviation, this.authService.getCurrentUser().username)
      .subscribe(() => this.toastService.success('Enrolled to ', course.title));
  }

  deleteContribution(contrib: Contribution) {
    this.contribService.deleteContribution(contrib).subscribe(() =>
      this.router.navigate(['/loggedIn'])
    );
  }

}
