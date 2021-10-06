import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'l-routing';

  constructor(private router: Router) {}

  goToUnknown() {
    this.router.navigate(['page2', '777']);
  }
}
