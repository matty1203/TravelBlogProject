import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ImageViewerComponent } from 'src/app/pages/article-gallery/dialog/image-viewer/image-viewer.component';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-featured-videos',
  templateUrl: './featured-videos.component.html',
  styleUrls: ['./featured-videos.component.scss']
})
export class FeaturedVideosComponent implements OnInit {
  videos: any = [{ id: 1, url: "https://www.youtube.com/embed/2EJWKqFfHzc", upload_name: "Rohit Punnen" },
  { id: 2, url: "https://www.youtube.com/embed/YT3okfzS6sg", upload_name: "Abhi Thomas" },
  { id: 3, url: "https://www.youtube.com/embed/1ltZR9IWXaE", upload_name: "Unknown" },
  { id: 4, url: "https://www.youtube.com/embed/lQN1TLws1vM", upload_name: "Clara R" },
  { id: 5, url: "https://www.youtube.com/embed/QcCnXXT1gF8", upload_name: "Rahul S" },
  { id: 6, url: "https://www.youtube.com/embed/8fIy_aHokwI", upload_name: "Trevor Noah" },
  { id: 7, url: "https://www.youtube.com/embed/Hb4TuCk9snk", upload_name: "Rahul S" },
  { id: 8, url: "https://www.youtube.com/embed/kmmAQ7ZCf4E", upload_name: "Trevor Noah" },
  { id: 9, url: "https://www.youtube.com/embed/mTLG43EHcSM", upload_name: "Unknown" },
  { id: 10, url: "https://www.youtube.com/embed/Hhzdv0sLLrg", upload_name: "Clara R" },
  ]
  constructor(private router: Router, public dialog: MatDialog,private _sanitizer: DomSanitizer) { }

  ngOnInit(): void {
  }

  home() {
    this.router.navigate(['/home'])

  }

  openLightBox(image) {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = false;
    dialogConfig.backdropClass = 'lightBox--backdrop'
    dialogConfig.autoFocus = true;
    dialogConfig.panelClass = 'lightBox';
    dialogConfig.data = {
      info: image
    };

    this.dialog.open(ImageViewerComponent, dialogConfig);
  }

  toImageGallery(){
    var elmnt = document.getElementById("video_starter");
    elmnt.scrollIntoView({behavior: 'smooth' });
  }

  sanitizeURL(url){
    return(this._sanitizer.bypassSecurityTrustResourceUrl(url));
  }



}
