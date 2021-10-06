import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'i-pipes';
  text = 'heLlo wOrlD!';
  number = 465156.4846;
  date = new Date();
  cep = '65050894';
  cpf = '94561467102';
  words: string[] = [];

  add(word: string) {
    this.words.push(word);
  }

  remove(index: number) {
    this.words.splice(index, 1);
  }
}
