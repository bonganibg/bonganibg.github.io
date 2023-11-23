import { Component, Input, OnInit } from '@angular/core';
import { ProjectDetail } from 'src/app/models/project.model';

@Component({
  selector: 'app-project-description',
  templateUrl: './project-description.component.html',
  styleUrls: ['./project-description.component.css']
})
export class ProjectDescriptionComponent implements OnInit {

  @Input() projectDetails!: ProjectDetail;
  constructor() { }

  ngOnInit(): void {
  }

}
