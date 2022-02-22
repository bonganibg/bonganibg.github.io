import { Component, OnInit } from '@angular/core';
import { Project } from '../models/project.model';
import { ProjectService } from './project.service';

@Component({
  selector: 'app-my-projects',
  templateUrl: './my-projects.component.html',
  styleUrls: ['./my-projects.component.scss', './project-container.component.scss']
})
export class MyProjectsComponent implements OnInit {

  constructor(private projectService: ProjectService) { }

  projects!: Project[];

  ngOnInit(): void
  {
    this.projects = this.projectService.getProjects();
  }

}
