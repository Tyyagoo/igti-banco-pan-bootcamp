import { Component, OnInit } from '@angular/core';
import { TodoListService } from '../todo-list.service';

@Component({
  selector: 'app-c2',
  templateUrl: './c2.component.html',
  styleUrls: ['./c2.component.css'],
})
export class C2Component implements OnInit {
  constructor(public todoListService: TodoListService) {
    console.log('C2 is ready!');
  }

  ngOnInit(): void {}
}
