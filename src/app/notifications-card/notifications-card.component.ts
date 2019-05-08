import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-notifications-card',
  templateUrl: './notifications-card.component.html',
  styleUrls: ['./notifications-card.component.sass']
})
export class NotificationsCardComponent implements OnInit {

  @Input('notificationType') notificationType: any;

  constructor() {
  }

  ngOnInit() {
  }

}
