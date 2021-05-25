import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-article-home-page',
  templateUrl: './article-home-page.component.html',
  styleUrls: ['./article-home-page.component.scss'],
  providers: [NgbCarouselConfig]
})
export class ArticleHomePageComponent implements OnInit {
  images = [700, 533, 807, 124].map((n) => `https://picsum.photos/id/${n}/900/500`);
  constructor(config: NgbCarouselConfig) {
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
}
