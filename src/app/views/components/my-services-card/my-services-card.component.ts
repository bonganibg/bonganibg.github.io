import { Component, OnInit, Input } from '@angular/core';
import { LandingServiceModel } from 'src/app/models/landing-page.model';

@Component({
  selector: 'app-my-services-card',
  templateUrl: './my-services-card.component.html',
  styleUrls: ['./my-services-card.component.css']
})
export class MyServicesCardComponent implements OnInit {

  constructor() { }

  @Input() service!: LandingServiceModel;

  ngOnInit(): void {
  }

}
