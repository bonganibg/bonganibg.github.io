import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-featured-projects',
  templateUrl: './featured-projects.component.html',
  styleUrls: ['./featured-projects.component.scss']
})
export class FeaturedProjectsComponent implements OnInit {

  constructor() { }

  projects = [
    "MiBo Maps",
    "Chicken Hop Skip and Jump",
    "Bluebottle Sting"
  ]

  ngOnInit(): void {
  }

}
