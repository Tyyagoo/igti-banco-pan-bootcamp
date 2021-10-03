import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'g-component-life-cycle';
  ids: number[] = [];
  label: string = '';

  generateRandomId(): number {
    let id = Math.floor(Math.random() * 13000);
    return this.ids.some((i) => i === id) ? this.generateRandomId() : id;
  }

  add() {
    let id = this.generateRandomId();
    this.ids.push(id);
  }

  remove(id: number) {
    this.ids.splice(this.ids.indexOf(id), 1);
  }
}
