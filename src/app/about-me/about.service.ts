import { Injectable } from '@angular/core';
import { AboutSection } from '../models/about-section.model';
import { AboutMe } from '../models/about.model';

@Injectable({
  providedIn: 'root'
})
export class AboutService {

  constructor() { }

  section1: AboutSection = {
    Heading: "Early Days",
    Content: "Raised in the dark forest, he fought through many monster, he never won, but he still fought them"
  }

  section2: AboutSection = {
    Heading: "The rise",
    Content: "There was no rise other than the sun, he just really sucked at fighting"
  }

  section3: AboutSection = {
    Heading: "The fall",
    Content: "Which fall, there are too many to say that there was only one"
  }

  section4: AboutSection = {
    Heading: "Dead Letter Circus",
    Content: "These dudes are really good, I've been sleeping on these brothers for too long, I'm probably gonna be listening to this album on repeat for the whole year"
  }

  section5: AboutSection = {
    Heading: "Shadow Of Intent",
    Content: "THIS IS WHERE IT BEGAN"
  }

  dummyAboutOne: AboutMe = {
    About: {heading: "Personal",sections: [this.section1, this.section2,this.section3] }
  }

  dummyAboutTwo: AboutMe = {
    About: {heading: "Music",sections: [this.section4, this.section2,this.section5] }
  }




  // Get the about me
  getAboutMe()
  {
    let aboutMe: AboutMe[] = [
      this.dummyAboutOne,
      this.dummyAboutTwo
    ]
    return aboutMe;
  }


}
