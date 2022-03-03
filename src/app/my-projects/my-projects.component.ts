import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Project } from '../models/project.model';
import { ProjectService } from './project.service';

@Component({
  selector: 'app-my-projects',
  templateUrl: './my-projects.component.html',
  styleUrls: ['./my-projects.component.scss']
})
export class MyProjectsComponent implements OnInit {

  constructor(private projectService: ProjectService,
              private route: ActivatedRoute) { }

  projects!: Project[];

  async ngOnInit()
  {
    this.route.data.subscribe();
    await this.projectService.loadProjects();

    this.projects = this.projectService.getProjects();
  }

}
