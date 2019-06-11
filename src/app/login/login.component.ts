import {Component} from '@angular/core';
import {User} from '../services/authentication/user';
import {Router} from '@angular/router';
import {AuthenticationService} from '../services/authentication/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent {

  user = new User();

  constructor(private authService: AuthenticationService,
              private router: Router) {
  }

  login() {
    this.authService.login(this.user)
      .subscribe(() => {
        this.router.navigate(['/loggedIn']);
      });
  }

}
