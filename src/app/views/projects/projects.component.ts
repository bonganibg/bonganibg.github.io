import { Component, OnInit } from '@angular/core';
import { Project, Tag } from 'src/app/models/project.model';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  constructor(private projectService: ProjectService) { }

  hasLoaded = false;
  showProjectDetails = false;

  projects: Project[] = [];
  tags: Tag[] = [];

  async ngOnInit(){
    await this.loadProjects();
    // await this.loadProjectTags();
  }

  async loadProjects(){
    this.hasLoaded = false;
    this.projects = await this.projectService.getProjects() || [];
    this.hasLoaded = true;
  }

  toggleProjectDetails(){
    this.showProjectDetails = !this.showProjectDetails;
  }
}
