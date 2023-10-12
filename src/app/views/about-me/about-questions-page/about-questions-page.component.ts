import { Component, OnInit } from '@angular/core';
import { QuestionSectionModel } from 'src/app/models/about-page-model';
import { AboutService } from 'src/app/services/about.service';

@Component({
  selector: 'app-about-questions-page',
  templateUrl: './about-questions-page.component.html',
  styleUrls: ['./about-questions-page.component.css']
})
export class AboutQuestionsPageComponent implements OnInit {

  constructor(private aboutService: AboutService) { }

  questions!: QuestionSectionModel[];

  async ngOnInit() {
    await this.loadQuestions();
  }

  async loadQuestions(){
    // this.aboutService.getQuestions().then((response) => {
    //   this.questions = response.data.questions;
    //   console.warn(this.questions);
    // })
  }


}
