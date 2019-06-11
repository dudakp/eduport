import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CardContainerComponent} from './card-container/card-container.component';
import {NewsCardDetailPageComponent} from './news-card-detail-page/news-card-detail-page.component';
import {LoginComponent} from './login/login.component';
import {AuthGuardService} from './services/authentication/auth-guard.service';
import {CreateCourseComponent} from './create-course/create-course.component';
import {CreateContributionComponent} from './create-contribution/create-contribution.component';
import {EnrollComponent} from './enroll/enroll.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'loggedIn', component: CardContainerComponent, canActivate: [AuthGuardService]},
  {path: 'newsItemDetail', component: NewsCardDetailPageComponent},
  {path: 'createCourse', component: CreateCourseComponent},
  {path: 'createContribution', component: CreateContributionComponent},
  {path: 'enrollToCourse', component: EnrollComponent},
  {path: '', redirectTo: '/login', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
