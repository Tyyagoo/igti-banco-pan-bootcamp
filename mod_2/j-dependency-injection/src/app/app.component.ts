import { Component } from '@angular/core';
import { TodoListService } from './todo-list.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'j-dependency-injection';

  constructor(public todoListService: TodoListService) {
    console.log('App is ready!');
  }
}
