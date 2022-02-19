import { Component, OnInit } from '@angular/core';
import { Project } from '../models/project.model';
import { ProjectService } from '../my-projects/project.service';

@Component({
  selector: 'app-project-info-page',
  templateUrl: './project-info-page.component.html',
  styleUrls: ['./project-info-page.component.scss']
})
export class ProjectInfoPageComponent implements OnInit {

  constructor(private projectService: ProjectService) { }

  project!: Project;
  ngOnInit(): void {

    this.project = this.projectService.getProject("etwertwertwert");
  }

}
