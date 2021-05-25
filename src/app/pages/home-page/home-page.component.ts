import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  images:any=[{id:1,url:"./assets/images/Mountain.jpg",name:"Rohit Punnen"},
  {id:1,url:"./assets/images/Mountain4.jpg",name:"Abhi Thomas"},
  {id:1,url:"./assets/images/Mountain2.jpg",name:"Unknown"},
  {id:1,url:"./assets/images/Mountain3.jpg",name:"Clara R"},
  {id:1,url:"./assets/images/Mountain2.jpg",name:"Rahul S"},
  ]  
 
  slideConfig = {"slidesToShow": 1, "slidesToScroll": 1};

  constructor() { }

  ngOnInit(): void {
  }
  slickInit(e) {
    console.log('slick initialized');
    
  }
}
