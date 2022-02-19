import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AboutMeComponent } from "./about-me/about-me.component";
import { HomePageComponent } from "./home-page/home-page.component";
import { MyProjectsComponent } from "./my-projects/my-projects.component";
import { ProjectInfoPageComponent } from "./project-info-page/project-info-page.component";

const routes: Routes = [
  {path: '', component:HomePageComponent},
  {path: 'about', component:AboutMeComponent},
  {path: 'projects', component:MyProjectsComponent},
  {path: 'proj', component:ProjectInfoPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
