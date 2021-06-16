import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticleGalleryComponent } from './pages/article-gallery/article-gallery.component';
import { ArticleHomePageComponent } from './pages/article-home-page/article-home-page.component';
import { FeaturedVideosComponent } from './pages/article-home-page/content-pages/featured-videos/featured-videos.component';
import { TravelStoriesComponent } from './pages/article-home-page/content-pages/travel-stories/travel-stories.component';
import { HomePageComponent } from './pages/home-page/home-page.component';

const routes: Routes = [{
  path:'',
  redirectTo: 'home',
  pathMatch: 'full'
},
{
  path:"home",
  component:HomePageComponent,data: {animation: 'HomePage'}
},
{
  path:"article-home",
  component:ArticleHomePageComponent,
  loadChildren: () =>
  
  import("./pages/article-home-page/article-home-page.module").then((m) => m.ArticleHomePageModule,),data: {animation: 'ArticleHomePage'}
},
{
  path:"gallery",
  component:ArticleGalleryComponent
},{
  path:"travel-stories",
  component:TravelStoriesComponent
},{
  path:"feature-videos",
  component:FeaturedVideosComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
