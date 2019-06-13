import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavbarComponent} from './navbar/navbar.component';
import {CardContainerComponent} from './card-container/card-container.component';
import {ProfileBadgeComponent} from './profile-badge/profile-badge.component';
import {ListCardComponent} from './list-card/list-card.component';
import {NotificationsCardComponent} from './notifications-card/notifications-card.component';
import {NewsCardComponent} from './news-card/news-card.component';
import {LoginComponent} from './login/login.component';
import {NewsCardDetailPageComponent} from './news-card-detail-page/news-card-detail-page.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {JwtInterceptorService} from './services/authentication/jwt-interceptor.service';
import {CreateCourseComponent} from './create-course/create-course.component';
import {CreateContributionComponent} from './create-contribution/create-contribution.component';
import {NotificationComponent} from './notification/notification.component';
import {EnrollComponent} from './enroll/enroll.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ToastrModule} from 'ngx-toastr';
import { RegisterPageComponent } from './register-page/register-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CardContainerComponent,
    ProfileBadgeComponent,
    ListCardComponent,
    NotificationsCardComponent,
    NewsCardComponent,
    LoginComponent,
    NewsCardDetailPageComponent,
    CreateCourseComponent,
    CreateContributionComponent,
    NotificationComponent,
    EnrollComponent,
    RegisterPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-top-right',

      preventDuplicates: true,
    })
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptorService,
      multi: true
    }
    // ,
    // {provide: BrowserXhr, useClass:CustExtBrowserXhr},
    // {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
