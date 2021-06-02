import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticleGalleryComponent } from './pages/article-gallery/article-gallery.component';
import { ArticleHomePageComponent } from './pages/article-home-page/article-home-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';

const routes: Routes = [{
  path:'',
  redirectTo: 'home',
  pathMatch: 'full'
},
{
  path:"home",
  component:HomePageComponent
},
{
  path:"article-home",
  component:ArticleHomePageComponent,
  loadChildren: () =>
  
  import("./pages/article-home-page/article-home-page.module").then((m) => m.ArticleHomePageModule,),
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
