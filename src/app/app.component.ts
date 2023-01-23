import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bonganibg';

  constructor(private router: Router){
    this.handleRouteEvents();
  }

  handleRouteEvents(){
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd){
        this.router.navigateByUrl(event.url);
      }
    })
  }
}
