import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleLandingPageComponent } from './content-pages/article-landing-page/article-landing-page.component';
import { RouterModule } from '@angular/router';
import { ArticleHome } from './article-home-page.routing';
import { GeographicLocationPageComponent } from './content-pages/geographic-location-page/geographic-location-page.component';


@NgModule({
  declarations: [ArticleLandingPageComponent, GeographicLocationPageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(ArticleHome)
  ]
})
export class ArticleHomePageModule { }
