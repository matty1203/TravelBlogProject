import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  images:any=[{id:1,url:"./assets/images/Mountain1.jpg",name:"Rohit Punnen"},
  {id:1,url:"./assets/images/Mountain4.jpg",name:"Abhi Thomas"},
  {id:1,url:"./assets/images/Mountain2.jpg",name:"Unknown"},
  {id:1,url:"./assets/images/Mountain3.jpg",name:"Clara R"},  
  {id:1,url:"./assets/images/Mountain2.jpg",name:"Rahul S"},
  ]  
 
  slideConfig = {"slidesToShow": 1, "slidesToScroll": 1};

  constructor(private router:Router) { 
    localStorage.setItem('home_load','1')

    // window.location.reload()
  }

  ngOnInit(): void {
    // window.reload
    // this.reloadComponent();
  }
 onSlideClick(id:any){

  localStorage.setItem('home_load','0')
  this.router.navigate(['/article-home'])

 }





}
