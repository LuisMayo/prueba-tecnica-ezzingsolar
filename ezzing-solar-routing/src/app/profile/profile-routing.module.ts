import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LikesComponent } from './likes/likes.component';
import { VideosComponent } from './videos/videos.component';

const routes: Routes = [{
  path: 'likes',
  component: LikesComponent,
},
{
  path: 'videos',
  component:VideosComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
