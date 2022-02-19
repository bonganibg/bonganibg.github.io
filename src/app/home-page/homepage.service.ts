import { Injectable } from '@angular/core';
import { FeaturedProjects } from '../models/featured.model';
import { Heading } from '../models/header.model';
import { Project } from '../models/project.model';
import { Skills } from '../models/skills.model';

@Injectable({
  providedIn: 'root'
})
export class HomepageService
{
  constructor() { }

  dummyHeading: Heading = { Text: {heading: "software & <br> web engineer", summary: "hi, i am bongani, i am a full stack engineer with experties in designing and developing web, desktop and mobile systems"},
                            Logo: "/assets/logo.svg", SocialOne: {image: "https://cdn-icons-png.flaticon.com/512/220/220343.png", link: "https://linkedin.com/bonganibg"},
                            SocialTwo: {image: "https://cdn-icons-png.flaticon.com/512/25/25231.png", link: "https://github.com/bonganibg"},
                            SocialThree: {image: "https://cdn-icons-png.flaticon.com/512/1384/1384031.png", link: "https://Instagram.com/bonganibg"}}



  dummySkills: Skills = {Design: {
    Heading: "Frontend",
    Image: "/assets/images/design.jpg",
    Description: "I really love design so much, like a really really lot and i always try and make everything i make look beautiful becuase without beauty there is ugliness and if ther is ugliness there is not beauty",
    Design: {headline: "Design Tasks", experience: ["UI Mockups", "Photo Editing", "Logo Design"], tools: ["Figma, GIMP"]},
    Implementation: {headline: "Implementation", languages: ["HTML", "CSS", "SCSS", "XML", "XAML"], frameworks: ["Angular", "Bootstrap", "WPF", "WinForms"]}
  },
  Programming: {
    Heading: "Programming",
    Image: "/assets/images/programming.jpg",
    Description: "Programming is what I do, I love writing code, and code is loved to be written by me, it's just the way that it is, how did i find myself to be so pittyful, I'm alon, im miserable",
    Languages: {headline: "Languages", languages: ["C#", "Java", "JavaScript", "TypeScript", "Delphi"]},
    Frameworks: {headline: "Frameworks", frameworks: [".Net Core", ".Net Framework", "ASP.NET", "Node", "Express"]}
  },
  Database: {
    Heading: "Databases",
    Image: "/assets/images/database.jpg",
    Description: "Data is everywhere and that is a very scary thing knowing that there is a lot of information just floating there in nothingness but as a developer it i obvious that it is not floating in thin are where a bird can eat it, so i have equiped myself with skills beyond those of a mortal to be able to manipulate the transporation of data",
    Languages: {headline: "Languages", languages: ["SQL", "T-SQL","NoSQL","JSON","Spreadsheet"]},
    Software: {headline: "Software and Tools", systems: ["MS SQL Server", "ORACLE SQL", "MS Access", "Postman", "MonogCompass"]},
    Cloud: {headline: "Cloud Services", platforms: ["Azure","Firebase","MongoDB"]}
  }
}

dummyProjectOne: Project = {
  ID: "proabdosboasd",
  Name: "MiBo Maps",
  Image: ["/assets/mibobanner.svg"],
  Platforms: ["Android"],
  Description: {full: "link.md", summary: "The worst mapping application in the world", overview: "So I guess this would be the section where I talk about why I wasted weeks of my life building a system which no one will ever care about and probably do nothing for me"},
  Client: "Perosnal",
  Technologies: ["Android", "Firebase"],
  Services: [ "Here API", "Google Maps API"],
  Responsibilities: ["UI Design", "Database Design", "Programming"],
  Github: {available: false, link: ""},
  Live: {available: true, link: "playstore"},
  Video: "",
  Complete: true
}

dummyProjectTwo: Project = {
  ID: "adfadfasdfasdf",
  Name: "Screen Shot Bot",
  Image: ["/assets/logo.svg"],
  Description: {full: "link.md", summary: "A very simple bot created to allow users of the platform discord to take screenshots of their favourite webpages and share the content with their friends", overview: "So I guess this would be the section where I talk about why I wasted weeks of my life building a system which no one will ever care about and probably do nothing for me"},
  Client: "Perosnal",
  Platforms: ["Discord"],
  Technologies: ["NodeJS"],
  Services: ["Discord JS"],
  Responsibilities: ["Programming"],
  Github: {available: true, link: "https://github.com/bonganibg"},
  Live: {available: false, link: ""},
  Video: "",
  Complete: true
}

dummyProjectThrees: Project = {
  ID: "etwertwertwert",
  Name: "Bonganibg.github.io",
  Image: ["/assets/mibo.svg"],
  Description: {full: "link.md", summary: "Personal portfolio website for professional software engineer bongani brendon gumbo", overview: "So I guess this would be the section where I talk about why I wasted weeks of my life building a system which no one will ever care about and probably do nothing for me"},
  Client: "Bonganibg",
  Platforms: ["Web"],
  Technologies: ["Angular", "Firebase"],
  Services: [],
  Responsibilities: ["UI Design", "Database Design", "Programming"],
  Github: {available: true, link: "https://github.com/bonganibg"},
  Live: {available: true, link: "https://github.com/bonganibg"},
  Video: "",
  Complete: true
}



  // Get the information from the heading section
  getHeadingInformation()
  {
    return this.dummyHeading;
  }

  // Get the information for the skills section
  getSkillsInformation()
  {
    return this.dummySkills;
  }

  // Get Featured Projects
  getFeaturedProjects()
  {
    let featuredProjects: FeaturedProjects = {
      Heading: "Take a look at some of my featured projects, they might have been rushed, but they work, still developing them",
      ProjectOne: this.dummyProjectOne,
      ProjectTwo: this.dummyProjectTwo,
      ProjectThree: this.dummyProjectThrees
    }

    return featuredProjects;
  }

}
