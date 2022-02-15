import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ProjectInfoPageComponent } from './project-info-page/project-info-page.component';
import { MarkdownModule } from 'ngx-markdown';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavBarComponent,
    ProjectInfoPageComponent
  ],
  imports: [
    BrowserModule,
    MarkdownModule,
    HttpClientModule,
    MarkdownModule.forRoot({loader: HttpClient})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
