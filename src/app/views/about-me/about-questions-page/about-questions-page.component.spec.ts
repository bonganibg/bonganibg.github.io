import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutQuestionsPageComponent } from './about-questions-page.component';

describe('AboutQuestionsPageComponent', () => {
  let component: AboutQuestionsPageComponent;
  let fixture: ComponentFixture<AboutQuestionsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutQuestionsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutQuestionsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
