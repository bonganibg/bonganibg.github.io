import { Component, OnInit } from '@angular/core';
import { Project, ProjectDetail, Tag } from 'src/app/models/project.model';
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

  viewProject!: ProjectDetail;

  async ngOnInit(){
    await this.loadProjects();
    console.log(this.projects)
    // await this.loadProjectTags();
  }

  async loadProjects(){
    this.hasLoaded = false;
    this.projects = await this.projectService.getProjects() || [];
    this.hasLoaded = true;
  }

  toggleProjectDetails(id: string = ""){
      let project = this.projects.find(p => p._id === id);

      if (project !== undefined && project !== null && project.detail !== undefined && project.detail !== null){
        this.viewProject = project.detail;
      }

    this.showProjectDetails = !this.showProjectDetails;
  }
}
