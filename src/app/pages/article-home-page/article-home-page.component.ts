import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-article-home-page',
  templateUrl: './article-home-page.component.html',
  styleUrls: ['./article-home-page.component.scss'],
  providers: [NgbCarouselConfig]
})
export class ArticleHomePageComponent implements OnInit {


  data:any={id:111,name:"EStonia"}
  images = [700, 533, 807, 124].map((n) => `https://picsum.photos/id/${n}/900/500`);
menu:any=[{id:1,name:"Geographic Location",url:"/article-home/geographic-location"},
{id:1,name:"How to reach",url:"/article-home/how-to-reach"},
{id:1,name:"Food and Culture",url:"/article-home/food-and-culture"},
{id:1,name:"Safety",url:"/article-home/safety"},
{id:1,name:"Travel Stories",url:"/article-home/travel-stories"},
{id:1,name:"Photo Gallery",url:"/article-home/article-landing"},
{id:1,name:"Feature Videos",url:"/article-home/article-landing"}]


  constructor(config: NgbCarouselConfig,private router:Router) {
    // customize default values of carousels used by this component tree
    config.interval = 10000;
    config.wrap = false;
    config.keyboard = false;
    config.pauseOnHover = false;
  }
  ngOnInit(): void {
  }
  scrollTo(){
    var elmnt = document.getElementById("intro3");
    elmnt.scrollIntoView();
  }
 onNavigate(url:any){
   console.log(url)
  this.router.navigate([url])
 }
 toLandingPage(){
   
  this.router.navigate(['/article-home/article-landing'])
 }

}
