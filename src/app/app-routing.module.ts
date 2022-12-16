import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './views/landing-page/landing-page.component';
import { ProjectsComponent } from './views/projects/projects.component';

const routes: Routes = [
  {path: '', component:LandingPageComponent},
  {path: 'projects', component:ProjectsComponent}
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
