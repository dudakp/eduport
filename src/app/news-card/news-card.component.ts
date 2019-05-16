import {Component, Input, OnInit} from '@angular/core';
import {Contribution} from "../services/course/contribution";

@Component({
  selector: 'app-news-card',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.sass']
})
export class NewsCardComponent implements OnInit {

  @Input('newsItem') newsItem: Contribution;

  constructor() {
  }

  ngOnInit() {
  }


}
