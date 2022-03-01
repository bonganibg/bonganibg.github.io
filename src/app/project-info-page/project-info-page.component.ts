import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Project } from '../models/project.model';
import { ProjectService } from '../my-projects/project.service';

@Component({
  selector: 'app-project-info-page',
  templateUrl: './project-info-page.component.html',
  styleUrls: ['./project-info-page.component.scss', './project-info-content.component.scss']
})
export class ProjectInfoPageComponent implements OnInit {

  constructor(private projectService: ProjectService,
              private route: ActivatedRoute) { }

  project!: Project;
  ngOnInit(): void {
    let id  = "";
    this.route.queryParams.subscribe(data => {

      if (data['id'])
        id = data['id'];
    });


  }
}
