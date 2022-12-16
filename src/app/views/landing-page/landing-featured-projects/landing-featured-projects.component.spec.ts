import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingFeaturedProjectsComponent } from './landing-featured-projects.component';

describe('LandingFeaturedProjectsComponent', () => {
  let component: LandingFeaturedProjectsComponent;
  let fixture: ComponentFixture<LandingFeaturedProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandingFeaturedProjectsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingFeaturedProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
