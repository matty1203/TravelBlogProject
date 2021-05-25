import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticleGalleryComponent } from './pages/article-gallery/article-gallery.component';
import { ArticleHomePageComponent } from './pages/article-home-page/article-home-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';

const routes: Routes = [{
  path:'',
  redirectTo: 'gallery',
  pathMatch: 'full'
},
{
  path:"app-home",
  component:ArticleHomePageComponent
},{
  path:"home",
  component:HomePageComponent
},
{
  path:"gallery",
  component:ArticleGalleryComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
