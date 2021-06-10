import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

import { slideUpAnimation } from './content_animation'
@Component({
  selector: 'app-article-home-page',
  templateUrl: './article-home-page.component.html',
  styleUrls: ['./article-home-page.component.scss'],
  animations: [
    slideUpAnimation
  ],
  providers: [NgbCarouselConfig]
})
export class ArticleHomePageComponent implements OnInit {


  data: any = { id: 111, name: "Estonia" }
  prev_active: number = 0;
  images = [700, 533, 807, 124].map((n) => `https://picsum.photos/id/${n}/900/500`);
  menu: any = [{ id: 1, name: "Geographic Location", url: "/article-home/geographic-location" },
  { id: 2, name: "How to reach", url: "/article-home/how-to-reach" },
  { id: 3, name: "Food and Culture", url: "/article-home/food-and-culture" },
  { id: 4, name: "Safety", url: "/article-home/safety" },
  { id: 5, name: "Travel Stories", url: "/article-home/travel-stories" },
  { id: 6, name: "Photo Gallery", url: "/gallery" },
  { id: 7, name: "Feature Videos", url: "/article-home/article-landing" }]


  constructor(private router: Router) {

  }
  ngOnInit(): void {
  }


  scrollTo() {
    var elmnt = document.getElementById("intro3");
    elmnt.scrollIntoView();
  }
  onNavigate(url: any, id: any) {
    if (this.prev_active != 0) {
      console.log("Hi")
      var prev_element = document.getElementById('menu_item' + this.prev_active);
      prev_element.classList.remove("menu--click");
    }
  /////To store the previous active element
    this.prev_active = id;
    var element = document.getElementById('menu_item' + id);
    element.classList.add("menu--click");
    if(id<=5){
     this.router.navigate([url]) 
    }
    else{
      this.router.navigate([url]) 
    }
    
  }
  toLandingPage() {

    this.router.navigate(['/article-home/article-landing'])
  }
  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }


}
