import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutTechnologiesPageComponent } from './about-technologies-page.component';

describe('AboutTechnologiesPageComponent', () => {
  let component: AboutTechnologiesPageComponent;
  let fixture: ComponentFixture<AboutTechnologiesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutTechnologiesPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutTechnologiesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
