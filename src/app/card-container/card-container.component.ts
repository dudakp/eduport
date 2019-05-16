import {Component, OnInit} from '@angular/core';
import {CoursesService} from "../services/course/courses.service";
import {Course} from "../services/course/course";
import {Contribution} from "../services/course/contribution";

@Component({
  selector: 'app-card-container',
  templateUrl: './card-container.component.html',
  styleUrls: ['./card-container.component.sass']
})
export class CardContainerComponent implements OnInit {

  coursesEnrolled: Course[];
  news: Contribution[] = [];

  constructor(private coursesService: CoursesService) {
  }

  ngOnInit() {
    this.reload();
  }

  reload() {
    this.coursesService.getAll()
      .subscribe(value => {
        this.coursesEnrolled = value;
        value.map(value1 => this.news.push(...value1.contributions));
        console.log(this.news);
      });
  }

  notifications = [{
    title: 'Notifications',
    body: ['OOP bonus points added', 'New AI study materials']
  }, {
    title: 'Tasks',
    body: ['MAT2 exam in 3 days', 'New AI study materials']
  }];

  userFullName: String = 'Pavol Dudak';
}
