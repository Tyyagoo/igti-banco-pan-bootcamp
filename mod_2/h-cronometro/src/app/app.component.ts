import { Component } from '@angular/core';
import { Exercise } from './types';

type Menu = 'Main' | 'Settings';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'h-cronometro';
  currentMenu: Menu = 'Main';
  exercises: Exercise[] = [];

  changeMenu(to: string) {
    if (['Main', 'Settings'].some((t) => t === to)) {
      this.currentMenu = to as Menu;
    }
  }
}
