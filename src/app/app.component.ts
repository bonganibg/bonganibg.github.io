import { Component } from '@angular/core';
import { PublicService } from './public.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bonganibg';

  loading = PublicService.loading;
}
