import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-card',
  templateUrl: './list-card.component.html',
  styleUrls: ['./list-card.component.sass']
})
export class ListCardComponent implements OnInit {

  listName: string = 'Subjects';
  coursesEnrolled = ['Artificial Inteligence', 'Object Oriented Programming', 'Mathematics 2'];

  constructor() { }

  ngOnInit() {
  }

}
