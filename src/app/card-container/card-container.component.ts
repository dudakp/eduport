import {Component, OnInit} from '@angular/core';
import {CoursesService} from '../services/course/courses.service';
import {Course} from '../services/course/course';
import {AuthenticationService} from '../services/authentication/authentication.service';
import {ContributionService} from '../services/contribution/contribution.service';
import {UserService} from '../services/authentication/user.service';
import {User} from '../services/authentication/user';
import {Contribution} from '../services/contribution/contribution';

@Component({
  selector: 'app-card-container',
  templateUrl: './card-container.component.html',
  styleUrls: ['./card-container.component.sass']
})
export class CardContainerComponent implements OnInit {

  constructor(private coursesService: CoursesService,
              private authService: AuthenticationService,
              private contributionService: ContributionService,
              private userService: UserService) {
  }

  coursesEnrolled: Course[];
  news: Contribution[] = [];
  currentUser: User;


  notifications = [{
    title: 'Notifications',
    body: ['OOP bonus points added', 'New AI study materials']
  }, {
    title: 'Tasks',
    body: ['MAT2 exam in 3 days', 'New AI study materials']
  }];

  ngOnInit() {
    this.currentUser = this.userService.getCurrentUser();
    // console.log(this.authService.getCurrentUser().username);
    this.contributionService.getContributions(this.currentUser.username).subscribe(contributions => this.news = contributions);
    this.coursesService.getAllForUser(this.currentUser.username).subscribe(value => this.coursesEnrolled = value);
  }

}
