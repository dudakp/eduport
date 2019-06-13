import {Component, Input, OnInit} from '@angular/core';
import {Course} from '../services/course/course';
import {UserService} from '../services/authentication/user.service';

@Component({
  selector: 'app-list-card',
  templateUrl: './list-card.component.html',
  styleUrls: ['./list-card.component.sass']
})
export class ListCardComponent implements OnInit {

  listName: string = 'Courses';

  @Input('courses') courses: Course[];

  constructor(private userService: UserService) {

  }

  ngOnInit() {

  }


}
