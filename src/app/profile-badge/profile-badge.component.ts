import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../services/authentication/authentication.service';
import {Observable} from 'rxjs';
import {User} from '../services/authentication/user';

@Component({
  selector: 'app-profile-badge',
  templateUrl: './profile-badge.component.html',
  styleUrls: ['./profile-badge.component.sass']
})
export class ProfileBadgeComponent implements OnInit {

  public user: Observable<User>;


  constructor(private authService: AuthenticationService) {
  }

  ngOnInit() {
    this.user = this.authService.onUserChange();
  }

}
