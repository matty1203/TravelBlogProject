import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleLandingPageComponent } from './content-pages/article-landing-page/article-landing-page.component';
import { RouterModule } from '@angular/router';
import { ArticleHome } from './article-home-page.routing';
import { GeographicLocationPageComponent } from './content-pages/geographic-location-page/geographic-location-page.component';
import { HowToReachComponent } from './content-pages/how-to-reach/how-to-reach.component';
import { FoodCultureComponent } from './content-pages/food-culture/food-culture.component';
import { SafetyPageComponent } from './content-pages/safety-page/safety-page.component';


@NgModule({
  declarations: [ArticleLandingPageComponent, GeographicLocationPageComponent, HowToReachComponent, FoodCultureComponent, SafetyPageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(ArticleHome)
  ]
})
export class ArticleHomePageModule { }
