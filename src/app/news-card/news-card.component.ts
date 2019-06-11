import {Component, Input, OnInit} from '@angular/core';
import {Contribution} from '../services/contribution/contribution';

@Component({
  selector: 'app-news-card',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.sass']
})
export class NewsCardComponent implements OnInit {

  @Input('newsItem') newsItem: Contribution;
  @Input('courseName') courseName: string;

  constructor() {
  }

  ngOnInit() {
    // this.contributionService.getContributions().subscribe(value => console.log(value));
  }

}
