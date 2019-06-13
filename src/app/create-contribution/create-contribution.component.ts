import {Component, OnInit} from '@angular/core';
import {Course} from '../services/course/course';
import {CoursesService} from '../services/course/courses.service';
import {ContributionService} from '../services/contribution/contribution.service';
import {Contribution} from '../services/contribution/contribution';
import {ToastrService} from 'ngx-toastr';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-contribution',
  templateUrl: './create-contribution.component.html',
  styleUrls: ['./create-contribution.component.sass']
})
export class CreateContributionComponent implements OnInit {

  courses: Course[];
  contribution: Contribution = new Contribution();
  forCourse: string;

  constructor(
    private courseService: CoursesService,
    private contributionService: ContributionService,
    private router: Router) {
  }

  ngOnInit() {
    this.courseService.getAll().subscribe(courses => this.courses = courses);
  }

  createContribution(courseAbrv: string) {
    this.contributionService.postContribution(courseAbrv, this.contribution).subscribe(() => {
      this.router.navigate(['/loggedIn']);
    });
  }


}
