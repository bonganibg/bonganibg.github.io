import { Component, OnInit } from '@angular/core';
import { HomepageService } from '../home-page/homepage.service';
import { FeaturedProjects } from '../models/featured.model';
import { Project } from '../models/project.model';

@Component({
  selector: 'app-featured-projects',
  templateUrl: './featured-projects.component.html',
  styleUrls: ['./featured-projects.component.scss']
})
export class FeaturedProjectsComponent implements OnInit {

  constructor(private homeService: HomepageService) { }

  projects!: Project[];

  featuredProjectData!: FeaturedProjects;

  ngOnInit(): void {
    // Load the featured project information

  }

}
