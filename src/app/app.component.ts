import { Component } from '@angular/core';
import { slideInAnimation } from './animation'
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    slideInAnimation
    // animation triggers go here
  ]
})
export class AppComponent {
  title = 'TravelBlogFrontend';
  searchMessage:string='Search Your Locations'
  search_active:boolean=false;

  menu: any = [{ id: 1, name: "Geographic Location", url: "/article-home/geographic-location" },
  { id: 2, name: "How to reach", url: "/article-home/how-to-reach" },
  { id: 3, name: "Food and Culture", url: "/article-home/food-and-culture" },
  { id: 4, name: "Safety", url: "/article-home/safety" },
  { id: 5, name: "Travel Stories", url: "/travel-stories" },
  { id: 6, name: "Photo Gallery", url: "/gallery" },
  { id: 7, name: "Feature Videos", url: "/article-home/article-landing"},
]

  results: any = [{ id: 1, img_url: "https://www.irishtimes.com/polopoly_fs/1.4513148.1616011727!/image/image.jpg_gen/derivatives/landscape_490/image.jpg", name: "Estonia" },
  { id: 2, img_url: "https://st.depositphotos.com/1428083/2946/i/600/depositphotos_29460297-stock-photo-bird-cage.jpg", name: "Croatia" },
  { id: 3, img_url: "https://www.searchenginejournal.com/wp-content/uploads/2018/10/How-to-Boost-Your-Images%E2%80%99-Visibility-on-Google-Images-760x400.png", name: "Portugal" },
  { id: 4, img_url: "https://www.irishtimes.com/polopoly_fs/1.4513148.1616011727!/image/image.jpg_gen/derivatives/landscape_490/image.jpg", name: "India" },
 ]


  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }
  constructor(private router:Router){

  }
  onSearch(searchKey) {
   
    if (searchKey !='' && !this.search_active) {
      console.log(searchKey,"--Search Key")
      console.log(this.search_active,"--Search Active")
      var element1 = document.getElementById("searchBar")
      element1.classList.remove("searchResults--closed");
      element1.classList.toggle("searchResults--expanded");
      this.search_active=true;
    }
    else if(searchKey !='' && this.search_active){
      console.log(searchKey,"--Second SIF")
      console.log(this.search_active,"--Search Active")
    }
    else{
      searchKey="";
      console.log(searchKey,"--Search Else")
      console.log(this.search_active,"--Search Active")
      this.closeSearch()

    }

  }
  closeSearch() {
    this.search_active=false;
    var element1 = document.getElementById("searchBar")
    if(element1.classList.contains('searchResults--expanded')){
      element1.classList.remove("searchResults--expanded");
      element1.classList.toggle("searchResults--closed"); 
    }
   
  }
  toLoginPage(){

    this.router.navigate(['/login-page'])
  }


}
