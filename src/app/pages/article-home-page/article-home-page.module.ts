import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleLandingPageComponent } from './content-pages/article-landing-page/article-landing-page.component';
import { RouterModule } from '@angular/router';
import { ArticleHome } from './article-home-page.routing';
import { GeographicLocationPageComponent } from './content-pages/geographic-location-page/geographic-location-page.component';
import { HowToReachComponent } from './content-pages/how-to-reach/how-to-reach.component';
import { FoodCultureComponent } from './content-pages/food-culture/food-culture.component';
import { SafetyPageComponent } from './content-pages/safety-page/safety-page.component';
import { TravelStoriesComponent } from './content-pages/travel-stories/travel-stories.component';
import { MatIconModule } from '@angular/material/icon';
import { FeaturedVideosComponent } from './content-pages/featured-videos/featured-videos.component';


@NgModule({
  declarations: [ArticleLandingPageComponent, GeographicLocationPageComponent, HowToReachComponent, FoodCultureComponent, SafetyPageComponent, TravelStoriesComponent, FeaturedVideosComponent],
  imports: [
    CommonModule,
    MatIconModule,
    RouterModule.forChild(ArticleHome)
  ]
})
export class ArticleHomePageModule { }
