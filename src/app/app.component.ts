import { Component } from '@angular/core';
import { slideInAnimation } from './animation'
import { RouterOutlet } from '@angular/router';

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
  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
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


}
