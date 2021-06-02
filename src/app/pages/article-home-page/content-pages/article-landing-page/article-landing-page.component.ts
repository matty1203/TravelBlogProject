import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-article-landing-page',
  templateUrl: './article-landing-page.component.html',
  styleUrls: ['./article-landing-page.component.scss']
})
export class ArticleLandingPageComponent implements OnInit {
  
  image:any="./assets/images/estonia.jpg";
 
  constructor(config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
    config.interval = 10000;
    config.wrap = false;
    config.keyboard = false;
    config.pauseOnHover = false;

  }
  ngOnInit(): void {
 

  }
 


}
