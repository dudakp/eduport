import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  loggedIn = false;

  constructor() { }

  ngOnInit() {
    //console.log(this.loggedIn);
  }

  login(): void {
    this.loggedIn = true;
    console.log(this.loggedIn);
  }

}
