import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ImageViewerComponent } from './dialog/image-viewer/image-viewer.component';

@Component({
  selector: 'app-article-gallery',
  templateUrl: './article-gallery.component.html',
  styleUrls: ['./article-gallery.component.scss']
})
export class ArticleGalleryComponent implements OnInit {
  images: any = [{ id: 1, url: "https://i.pinimg.com/originals/83/64/66/83646654668bf9ae412f45bb2e417ddf.jpg", name: "Rohit Punnen" },
  { id: 2, url: "https://st.depositphotos.com/1428083/2946/i/600/depositphotos_29460297-stock-photo-bird-cage.jpg", name: "Abhi Thomas" },
  { id: 3, url: "https://www.searchenginejournal.com/wp-content/uploads/2018/10/How-to-Boost-Your-Images%E2%80%99-Visibility-on-Google-Images-760x400.png", name: "Unknown" },
  { id: 4, url: "https://www.irishtimes.com/polopoly_fs/1.4513148.1616011727!/image/image.jpg_gen/derivatives/landscape_490/image.jpg", name: "Clara R" },
  { id: 5, url: "https://neilpatel.com/wp-content/uploads/2017/09/image-editing-tools.jpg", name: "Rahul S" },
  { id: 6, url: "https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg", name: "Trevor Noah" },
  { id: 7, url: "https://neilpatel.com/wp-content/uploads/2017/09/image-editing-tools.jpg", name: "Rahul S" },
  { id: 8, url: "https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg", name: "Trevor Noah" },
  { id: 9, url: "https://www.searchenginejournal.com/wp-content/uploads/2018/10/How-to-Boost-Your-Images%E2%80%99-Visibility-on-Google-Images-760x400.png", name: "Unknown" },
  { id: 10, url: "https://www.irishtimes.com/polopoly_fs/1.4513148.1616011727!/image/image.jpg_gen/derivatives/landscape_490/image.jpg", name: "Clara R" },
  ]
  constructor(private router: Router, public dialog: MatDialog) { }

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


}
