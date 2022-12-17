import { Component, OnInit, Input } from '@angular/core';
import { LandingIndustryModel } from 'src/app/models/landing-page.model';

@Component({
  selector: 'app-industry-card',
  templateUrl: './industry-card.component.html',
  styleUrls: ['./industry-card.component.css']
})
export class IndustryCardComponent implements OnInit {

  constructor() { }

  @Input() industry!: LandingIndustryModel;

  ngOnInit(): void {
  }

}
