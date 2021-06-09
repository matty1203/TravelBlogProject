import { Routes } from "@angular/router";
import { ArticleLandingPageComponent } from "./content-pages/article-landing-page/article-landing-page.component";
import { FoodCultureComponent } from "./content-pages/food-culture/food-culture.component";
import { GeographicLocationPageComponent } from "./content-pages/geographic-location-page/geographic-location-page.component";
import { HowToReachComponent } from "./content-pages/how-to-reach/how-to-reach.component";
import { SafetyPageComponent } from "./content-pages/safety-page/safety-page.component";


export const ArticleHome: Routes = [
  {
    path: "",
    redirectTo: "article-landing",
    pathMatch: "full",
  },{
    path:"article-landing",
    component:ArticleLandingPageComponent
  },{
    path:"geographic-location",
    component:GeographicLocationPageComponent
  },{
    path:"how-to-reach",
    component:HowToReachComponent
  },{
    path:"food-and-culture",
    component:FoodCultureComponent
  },{
    path:"safety",
    component:SafetyPageComponent
  }
  
];