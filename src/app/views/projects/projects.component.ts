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

  projects: Project[] = [];
  tags: Tag[] = [];

  async ngOnInit(){
    await this.loadProjects();
    await this.loadProjectTags();
  }

  async loadProjects(){
    this.projectService.getProjects().then((response) => {
      this.projects = response.data.projects;
    })
    .catch(() => {
      alert("Something has gone wrong");
    })
  }

  async loadProjectTags(){
    this.projectService.getProjectTags().then((response) => {
      this.tags = response.data.tags;
    })
    .catch(() => {
      alert("Something has gone wrong");
    })
  }

  async filterProjects(index: string){
    await this.loadProjects();

    if (index === '')
      return;

    console.clear();

    let projects : Project[] = [];
    this.projects.forEach((project) => {
      if (project.tags.find(item => item._id == index) != undefined)
      {
        projects.push(project);
      }
    })

    this.projects = projects;
  }
}
