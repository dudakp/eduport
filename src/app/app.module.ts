import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CardContainerComponent } from './card-container/card-container.component';
import { ProfileBadgeComponent } from './profile-badge/profile-badge.component';
import { ListCardComponent } from './list-card/list-card.component';
import { NotificationsCardComponent } from './notifications-card/notifications-card.component';
import { NewsCardComponent } from './news-card/news-card.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CardContainerComponent,
    ProfileBadgeComponent,
    ListCardComponent,
    NotificationsCardComponent,
    NewsCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
