import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

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
import { ExpertiseCardComponent } from './views/components/expertise-card/expertise-card.component';
import { MyServicesCardComponent } from './views/components/my-services-card/my-services-card.component';
import { IndustryCardComponent } from './views/components/industry-card/industry-card.component';
import { LandingProjectCardComponent } from './views/components/landing-project-card/landing-project-card.component';
import { ProjectCardComponent } from './views/components/project-card/project-card.component';
import { AboutMeComponent } from './views/about-me/about-me.component';
import { AboutSectionNavComponent } from './views/about-me/about-section-nav/about-section-nav.component';
import { AboutMePageComponent } from './views/about-me/about-me-page/about-me-page.component';
import { AboutTechnologiesPageComponent } from './views/about-me/about-technologies-page/about-technologies-page.component';
import { AboutQuestionsPageComponent } from './views/about-me/about-questions-page/about-questions-page.component';
import { SkeletonLoaderComponent } from './views/components/skeleton-loader/skeleton-loader.component';

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
    ExpertiseCardComponent,
    MyServicesCardComponent,
    IndustryCardComponent,
    LandingProjectCardComponent,
    ProjectCardComponent,
    AboutMeComponent,
    AboutSectionNavComponent,
    AboutMePageComponent,
    AboutTechnologiesPageComponent,
    AboutQuestionsPageComponent,
    SkeletonLoaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
