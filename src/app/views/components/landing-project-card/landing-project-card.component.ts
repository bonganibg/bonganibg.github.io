import { Component, OnInit, Input } from '@angular/core';
import { LandingPageFeaturedProject } from 'src/app/models/landing-page.model';

@Component({
  selector: 'app-landing-project-card',
  templateUrl: './landing-project-card.component.html',
  styleUrls: ['./landing-project-card.component.css']
})
export class LandingProjectCardComponent implements OnInit {

  @Input() project!: LandingPageFeaturedProject

  constructor() { }

  ngOnInit(): void {
  }

}
