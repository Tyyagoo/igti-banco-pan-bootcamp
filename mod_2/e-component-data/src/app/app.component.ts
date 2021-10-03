import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'e-component-data';
  movies = [
    { title: 'Avengers: Ultimato', rating: 0 },
    { title: 'Avengers: Infinite War', rating: 0 },
    { title: 'Debi & Loide', rating: 0 },
    { title: 'Until the Last Man', rating: 0 },
  ];
}
