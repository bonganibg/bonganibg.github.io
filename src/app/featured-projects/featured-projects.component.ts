import { Component, Input, OnInit } from '@angular/core';
import { HomepageService } from '../home-page/homepage.service';
import { FeaturedProjects } from '../models/featured.model';
import { Project } from '../models/project.model';

@Component({
  selector: 'app-featured-projects',
  templateUrl: './featured-projects.component.html',
  styleUrls: ['./featured-projects.component.scss']
})
export class FeaturedProjectsComponent implements OnInit {

  @Input() projects!: Project[];

  constructor() { }


  featuredProjectData!: FeaturedProjects;

  ngOnInit(): void {

  }

}
