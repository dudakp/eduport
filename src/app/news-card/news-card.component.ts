import {Component, Input, OnInit} from '@angular/core';
import {Contribution} from '../services/contribution/contribution';
import {User} from '../services/authentication/user';
import {Router} from '@angular/router';
import {AuthenticationService} from '../services/authentication/authentication.service';

@Component({
  selector: 'app-news-card',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.sass']
})
export class NewsCardComponent implements OnInit {

  @Input('newsItem') newsItem: Contribution;
  @Input('student') student: User;
  @Input('courseName') courseName: string;

  constructor(private authService: AuthenticationService, private router: Router) {
  }

  ngOnInit() {
  }

  isStudentLoggedIn() {
    return this.authService.getCurrentUser().roles.includes('ROLE_STUDENT');
  }

  navigateToDetail() {
    this.router.navigate(['/courseDetail']);
  }

}
