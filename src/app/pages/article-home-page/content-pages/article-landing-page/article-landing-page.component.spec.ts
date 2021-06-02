import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleLandingPageComponent } from './article-landing-page.component';

describe('ArticleLandingPageComponent', () => {
  let component: ArticleLandingPageComponent;
  let fixture: ComponentFixture<ArticleLandingPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleLandingPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleLandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
