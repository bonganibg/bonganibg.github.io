import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LandingHeroComponent } from './views/landing-page/landing-hero/landing-hero.component';
import { LandingExpertiseSectionComponent } from './views/landing-page/landing-expertise-section/landing-expertise-section.component';
import { LandingServicesSectionComponent } from './views/landing-page/landing-services-section/landing-services-section.component';
import { LandingIndustriesSectionComponent } from './views/landing-page/landing-industries-section/landing-industries-section.component';
import { LandingFeaturedProjectsComponent } from './views/landing-page/landing-featured-projects/landing-featured-projects.component';
import { ProjectsComponent } from './views/projects/projects.component';
import { LandingPageComponent } from './views/landing-page/landing-page.component';
import { AppRoutingModule } from './app-routing.module';
import { NavBarComponent } from './views/components/nav-bar/nav-bar.component';
import { FooterComponent } from './views/components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    LandingHeroComponent,
    LandingExpertiseSectionComponent,
    LandingServicesSectionComponent,
    LandingIndustriesSectionComponent,
    LandingFeaturedProjectsComponent,
    ProjectsComponent,
    NavBarComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
