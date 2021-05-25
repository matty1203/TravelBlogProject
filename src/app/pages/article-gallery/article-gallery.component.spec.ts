import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleGalleryComponent } from './article-gallery.component';

describe('ArticleGalleryComponent', () => {
  let component: ArticleGalleryComponent;
  let fixture: ComponentFixture<ArticleGalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleGalleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
