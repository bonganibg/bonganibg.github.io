import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectSkeletonLoaderComponent } from './project-skeleton-loader.component';

describe('ProjectSkeletonLoaderComponent', () => {
  let component: ProjectSkeletonLoaderComponent;
  let fixture: ComponentFixture<ProjectSkeletonLoaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectSkeletonLoaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectSkeletonLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
