import { Component, Input } from '@angular/core';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @Input() names?: string[] = [];

  constructor() {
    console.log(environment.production);
  }
}
