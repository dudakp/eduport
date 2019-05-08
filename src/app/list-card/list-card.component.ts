import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list-card',
  templateUrl: './list-card.component.html',
  styleUrls: ['./list-card.component.sass']
})
export class ListCardComponent implements OnInit {

  @Input('content') content: any;

  constructor() { }

  ngOnInit() {
  }

}
