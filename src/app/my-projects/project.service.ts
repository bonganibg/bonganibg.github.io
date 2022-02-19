import { Injectable } from '@angular/core';
import { Project } from '../models/project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor() { }

  dummyProjectOne: Project = {
    ID: "proabdosboasd",
    Name: "MiBo Maps",
    Image: ["/assets/mibobanner.svg"],
    Platforms: ["Android"],
    Description: {full: "link.md", summary: "The worst mapping application in the world",overview: "So I guess this would be the section where I talk about why I wasted weeks of my life building a system which no one will ever care about and probably do nothing for me"},
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

  dummyProjectThree: Project = {
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

  dummyProjectFour: Project = {
    ID: "suhfasdfbaiodvfasdf",
    Name: "ACME Guitars",
    Image: ["/assets/mibo.svg"],
    Description: {full: "link.md", summary: "The one guitar store in the world which does not own any inventory", overview: "So I guess this would be the section where I talk about why I wasted weeks of my life building a system which no one will ever care about and probably do nothing for me"},
    Client: "BonganiBG",
    Platforms: ["Web"],
    Technologies: ["ASP.NET MVC", "MS SQL Server"],
    Services: [],
    Responsibilities: ["UI Design", "Database Design", "Programming"],
    Github: {available: false, link: "https://github.com/bonganibg"},
    Live: {available: false, link: "https://github.com/bonganibg"},
    Video: "",
    Complete: true
  }

  projects: Project[] =  [
    this.dummyProjectOne,
    this.dummyProjectTwo,
    this.dummyProjectThree,
    this.dummyProjectFour,
  ]


  // Get All of the projects
  getProjects()
  {
    return this.projects;
  }

  // Get Single Project
  getProject(projectID: String)
  {
    let proj!: Project;
    this.projects.forEach(item => {
      if (item.ID == projectID)
        proj = item;
    });
    return proj;
  }
}
