import {Component, Input} from '@angular/core';
import {Course} from '../services/course/course';

@Component({
  selector: 'app-list-card',
  templateUrl: './list-card.component.html',
  styleUrls: ['./list-card.component.sass']
})
export class ListCardComponent {

  @Input('courses') coursesEnrolled: Course[];

  listName: string = 'Courses';


}
