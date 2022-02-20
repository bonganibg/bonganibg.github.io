import { Injectable } from '@angular/core';
import { ArticleSectionContent } from '../models/article-content.model';
import { ArticleSection } from '../models/project-article.model';
import { Project } from '../models/project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor() { }



  articleContent: ArticleSectionContent = {
    Paragraph: "I do not have enough words to be able to articulate what I would like to articulate in this section and i do not have the will to find some lorem which can be inputted into this secton so i am using the harder say and choosing to manually write out this information, for a man will never learn how to articulate if he does not randomly type into nothingness for no real reason",
    List: ["Chicken Wings", "White Sauce"]
  }

  articleContentOne: ArticleSectionContent = {
    Paragraph: "I do not have enough words to be able to articulate what I would like to articulate in this section and i do not have the will to find some lorem which can be inputted into this secton so i am using the harder say and choosing to manually write out this information, for a man will never learn how to articulate if he does not randomly type into nothingness for no real reason",
    List: []
  }


  article: ArticleSection =  {
    Content: [this.articleContent, this.articleContentOne],
    Subheading: "Something Random"
  }

  dummyProjectOne: Project = {
    ID: "proabdosboasd",
    Name: "MiBo Maps",
    Image: ["/assets/mibobanner.svg"],
    Platforms: ["Android"],
    Description: {full: [this.article,this.article], summary: "The worst mapping application in the world",overview: "So I guess this would be the section where I talk about why I wasted weeks of my life building a system which no one will ever care about and probably do nothing for me"},
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
    Description: {full: [this.article], summary: "A very simple bot created to allow users of the platform discord to take screenshots of their favourite webpages and share the content with their friends", overview: "So I guess this would be the section where I talk about why I wasted weeks of my life building a system which no one will ever care about and probably do nothing for me"},
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
    Description: {full: [this.article,this.article], summary: "Personal portfolio website for professional software engineer bongani brendon gumbo", overview: "So I guess this would be the section where I talk about why I wasted weeks of my life building a system which no one will ever care about and probably do nothing for me"},
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
    Description: {full: [this.article,this.article], summary: "The one guitar store in the world which does not own any inventory", overview: "So I guess this would be the section where I talk about why I wasted weeks of my life building a system which no one will ever care about and probably do nothing for me"},
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
