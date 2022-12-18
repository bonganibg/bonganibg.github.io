import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutSectionNavComponent } from './about-section-nav.component';

describe('AboutSectionNavComponent', () => {
  let component: AboutSectionNavComponent;
  let fixture: ComponentFixture<AboutSectionNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutSectionNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutSectionNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
