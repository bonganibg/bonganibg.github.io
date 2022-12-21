import { Component, OnInit } from '@angular/core';
import { TechnologiesModel, TechnologiesSectionModel } from 'src/app/models/about-page-model';
import { AboutService } from 'src/app/services/about.service';

@Component({
  selector: 'app-about-technologies-page',
  templateUrl: './about-technologies-page.component.html',
  styleUrls: ['./about-technologies-page.component.css']
})
export class AboutTechnologiesPageComponent implements OnInit {

  constructor(private aboutService: AboutService) { }

  technologies!: TechnologiesSectionModel[];

  async ngOnInit() {
    await this.loadTechnologies();
  }

  async loadTechnologies(){
    this.aboutService.getTechnologies().then((response) => {
      this.technologies = response.data.technologies;
      console.log(this.technologies)
    })
    .catch((error) => {
      console.warn(error);
      alert("something has gone wrong")
    })
  }

}
