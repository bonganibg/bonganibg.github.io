import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ProjectInfoPageComponent } from './project-info-page/project-info-page.component';
import { MarkdownModule } from 'ngx-markdown';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AboutMeComponent } from './about-me/about-me.component';
import { AppRoutingModule } from './app-routing.module';
import { MyProjectsComponent } from './my-projects/my-projects.component';
import { SkillsComponent } from './skills/skills.component';
import { FeaturedProjectsComponent } from './featured-projects/featured-projects.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavBarComponent,
    ProjectInfoPageComponent,
    AboutMeComponent,
    MyProjectsComponent,
    SkillsComponent,
    FeaturedProjectsComponent
  ],
  imports: [
    BrowserModule,
    MarkdownModule,
    HttpClientModule,
    MarkdownModule.forRoot({loader: HttpClient}),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
