import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Project } from '../models/project.model';
import { ViewingStat } from '../models/stat.model';
import { PublicService } from '../public.service';
import { ProjectService } from './project.service';

@Component({
  selector: 'app-my-projects',
  templateUrl: './my-projects.component.html',
  styleUrls: ['./my-projects.component.scss']
})
export class MyProjectsComponent implements OnInit {

  constructor(private projectService: ProjectService,
              private route: ActivatedRoute) { }

  projects: Project[] = this.preloadProjects();
  loaded = false;

  async ngOnInit()
  {
    this.route.data.subscribe();
    await this.projectService.loadProjects();

    let stat: ViewingStat = {
      Date: new Date(),
      Message: "Viewing Projects",
      Page: "Projects",
      Time: new Date().getUTCDay().toString()
    }

    PublicService.WriteStat(stat);

    this.projects = this.projectService.getProjects();
    this.loaded = true;
  }

  preloadProjects()
  {
    let emptyProject: Project = {
      Blog: "",
      Client: "",
      Complete: false,
      Description: "",
      Github: {available: false, link: ""},
      ID: "",
      Image: "",
      Live: {available: false, link: ""},
      Name: "",
      Platforms: [],
      Technologies: []
    }

    let emptyList: Project[] = [];

    for(let i = 0; i < 6; i++)
    {
      emptyList.push(emptyProject);
    }

    return emptyList;

  }

}
