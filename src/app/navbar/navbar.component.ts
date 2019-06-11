import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../services/authentication/authentication.service';
import {Router} from '@angular/router';
import {User} from '../services/authentication/user';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {

  public user: User;

  constructor(private authService: AuthenticationService, private router: Router) {
  }

  ngOnInit() {
    this.authService.onUserChange().subscribe(user => {
      this.user = user;
    });
  }

  isLoggedIn(): boolean {
    return this.authService.isAuthenticated();
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
