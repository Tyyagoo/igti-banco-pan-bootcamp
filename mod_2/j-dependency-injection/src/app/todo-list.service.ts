import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TodoListService {
  items: string[] = [];
  constructor() {
    this.add('Item 1');
    this.add('Item 2');
    this.add('Item 3');
    this.add('Item 4');
    console.log('TodoListService is ready!');
  }

  add(item: string) {
    this.items.push(item);
  }

  remove(index: number) {
    this.items.splice(index, 1);
  }
}
