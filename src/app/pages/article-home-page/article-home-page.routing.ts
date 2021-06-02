import { Routes } from "@angular/router";
import { ArticleLandingPageComponent } from "./content-pages/article-landing-page/article-landing-page.component";
import { GeographicLocationPageComponent } from "./content-pages/geographic-location-page/geographic-location-page.component";


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
  }
  
];