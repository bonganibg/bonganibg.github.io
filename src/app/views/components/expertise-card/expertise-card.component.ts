import { Component, OnInit, Input } from '@angular/core';
import { LandingExpertiseModel } from 'src/app/models/landing-page.model';

@Component({
  selector: 'app-expertise-card',
  templateUrl: './expertise-card.component.html',
  styleUrls: ['./expertise-card.component.css']
})
export class ExpertiseCardComponent implements OnInit {

  constructor() { }

  @Input() expertise!: LandingExpertiseModel;

  ngOnInit(): void {
  }

}
