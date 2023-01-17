import { Component, OnInit, Input } from '@angular/core';
import { LandingPageFeaturedProject } from 'src/app/models/landing-page.model';

@Component({
  selector: 'app-landing-featured-projects',
  templateUrl: './landing-featured-projects.component.html',
  styleUrls: ['./landing-featured-projects.component.css']
})
export class LandingFeaturedProjectsComponent implements OnInit {

  @Input() projects!: LandingPageFeaturedProject[];

  constructor() { }

  ngOnInit(): void {
  }

}
