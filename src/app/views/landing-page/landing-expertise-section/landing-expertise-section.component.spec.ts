import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingExpertiseSectionComponent } from './landing-expertise-section.component';

describe('LandingExpertiseSectionComponent', () => {
  let component: LandingExpertiseSectionComponent;
  let fixture: ComponentFixture<LandingExpertiseSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandingExpertiseSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingExpertiseSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
