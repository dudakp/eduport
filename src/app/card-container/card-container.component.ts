import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-container',
  templateUrl: './card-container.component.html',
  styleUrls: ['./card-container.component.sass']
})
export class CardContainerComponent implements OnInit {

  cards = [{
    title: 'Notifications',
    body: ['OOP bonus points added', 'New AI study materials']
  }, {
    title: 'Tasks',
    body: ['MAT2 exam in 3 days', 'New AI study materials']
  }];
  constructor() { }

  ngOnInit() {
  }

}
