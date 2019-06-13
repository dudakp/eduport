import {Component, OnInit} from '@angular/core';
import {CoursesService} from '../services/course/courses.service';
import {Course} from '../services/course/course';
import {AuthenticationService} from '../services/authentication/authentication.service';
import {ContributionService} from '../services/contribution/contribution.service';
import {UserService} from '../services/authentication/user.service';
import {User} from '../services/authentication/user';
import {Contribution} from '../services/contribution/contribution';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-card-container',
  templateUrl: './card-container.component.html',
  styleUrls: ['./card-container.component.sass']
})
export class CardContainerComponent implements OnInit {

  constructor(
    private coursesService: CoursesService,
    private authService: AuthenticationService,
    private contributionService: ContributionService,
    private userService: UserService) {
  }

  coursesEnrolled: Course[];
  allCourses: Course[];
  currentUserObservable: Observable<User>;
  currentUser: User;

  news: Contribution[] = [];
  students: User[] = [];

  ngOnInit() {
    this.currentUserObservable = this.authService.onUserChange();
    this.currentUserObservable.subscribe(value => this.currentUser = value);

    if (this.isStudentLoggedIn()) {
      this.contributionService.getContributions(this.currentUser.username).subscribe(contributions => {
        this.news = contributions.reverse();
      });
    } else if (!this.isStudentLoggedIn()) {
      this.userService.getAllStudents().subscribe(value => this.students = value);

    }

    this.coursesService.getAllForUser(this.currentUser.username).subscribe(value => {
      this.coursesEnrolled = value;
    });

    this.coursesService.getAll().subscribe(value => {
      this.allCourses = value;
    });
  }

  isStudentLoggedIn() {
    return this.authService.getCurrentUser().roles.includes('ROLE_STUDENT');
  }

}
