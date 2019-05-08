import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardContainerComponent } from './card-container/card-container.component';
import { NewsCardDetailPageComponent } from './news-card-detail-page/news-card-detail-page.component';

const routes: Routes = [
  {path: 'loggedIn', component: CardContainerComponent},
  {path: 'newsItemDetail', component: NewsCardDetailPageComponent},
  {path: '', redirectTo: '/loggedIn', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
