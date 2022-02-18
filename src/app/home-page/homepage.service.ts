import { Injectable } from '@angular/core';
import { Heading } from '../models/header.model';
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

}
