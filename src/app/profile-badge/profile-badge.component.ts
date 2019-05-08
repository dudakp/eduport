import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-profile-badge',
  templateUrl: './profile-badge.component.html',
  styleUrls: ['./profile-badge.component.sass']
})
export class ProfileBadgeComponent implements OnInit {

  @Input('fullName') fullName: String;    

  constructor() { }

  ngOnInit() {
  }

}
