import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleHomePageComponent } from './article-home-page.component';

describe('ArticleHomePageComponent', () => {
  let component: ArticleHomePageComponent;
  let fixture: ComponentFixture<ArticleHomePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleHomePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
