import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './views/about-me/about-me.component';
import { LandingPageComponent } from './views/landing-page/landing-page.component';
import { ProjectsComponent } from './views/projects/projects.component';

const routes: Routes = [
  {path: '', component:LandingPageComponent},
  {path: 'projects', component:ProjectsComponent},
  {path: 'about', component:AboutMeComponent}
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
