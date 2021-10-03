import { Component } from '@angular/core';
import { TodoItem, todoFactory } from './todo_item';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent {
  list: TodoItem[];

  constructor() {
    this.list = [
      todoFactory('Task1', 'Make something', false),
      todoFactory('Task2', 'Go outside', false),
      todoFactory('Task3', 'Code something', false),
      todoFactory('Completed', 'Sleep', false),
    ];
  }

  addTask(title: string, description: string) {
    if (title != undefined && description != undefined) {
      if (title.length > 0 && description.length > 0) {
        this.list.push(todoFactory(title, description, false));
      }
    }
  }

  deleteTask(task: TodoItem) {
    this.list = this.list.filter((t) => t != task);
  }

  filterTasks(filter: (task: TodoItem) => boolean) {
    return this.list.filter(filter);
  }

  countPendingTasks() {
    return this.filterTasks((task) => !task.done).length;
  }

  countCompletedTasks() {
    return this.filterTasks((task) => task.done).length;
  }
}
