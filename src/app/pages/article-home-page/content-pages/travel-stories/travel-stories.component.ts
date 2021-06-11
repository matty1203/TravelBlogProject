import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-travel-stories',
  templateUrl: './travel-stories.component.html',
  styleUrls: ['./travel-stories.component.scss']
})
export class TravelStoriesComponent implements OnInit {
  blogs: any = [{ id: 1, thumb_url: "https://i.pinimg.com/originals/83/64/66/83646654668bf9ae412f45bb2e417ddf.jpg", name: "Rohit Punnen" },
  { id: 2, thumb_url: "https://st.depositphotos.com/1428083/2946/i/600/depositphotos_29460297-stock-photo-bird-cage.jpg", name: "Abhi Thomas" },
  { id: 3, thumb_url: "https://www.searchenginejournal.com/wp-content/uploads/2018/10/How-to-Boost-Your-Images%E2%80%99-Visibility-on-Google-Images-760x400.png", name: "Unknown" },
  { id: 4, thumb_url: "https://www.irishtimes.com/polopoly_fs/1.4513148.1616011727!/image/image.jpg_gen/derivatives/landscape_490/image.jpg", name: "Clara R" },
  { id: 5, thumb_url: "https://neilpatel.com/wp-content/uploads/2017/09/image-editing-tools.jpg", name: "Rahul S" },
  { id: 6, thumb_url: "https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg", name: "Trevor Noah" },
  { id: 7, thumb_url: "https://neilpatel.com/wp-content/uploads/2017/09/image-editing-tools.jpg", name: "Rahul S" },
  { id: 8, thumb_url: "https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg", name: "Trevor Noah" },
  { id: 9, thumb_url: "https://www.searchenginejournal.com/wp-content/uploads/2018/10/How-to-Boost-Your-Images%E2%80%99-Visibility-on-Google-Images-760x400.png", name: "Unknown" },
  { id: 10, thumb_url: "https://www.irishtimes.com/polopoly_fs/1.4513148.1616011727!/image/image.jpg_gen/derivatives/landscape_490/image.jpg", name: "Clara R" },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
