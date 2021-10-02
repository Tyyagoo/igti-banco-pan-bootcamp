import { Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  title: string = "Counter"
  value: number = 0

  @HostBinding("style.--color")
  @Input()
  color: string = "aqua"

  constructor() { }

  ngOnInit(): void {
  }

  increment () {
    this.value += 1
    this.setColor()
  }

  decrement () {
    this.value -= 1
    this.setColor()
  }

  setColor () {
    this.color = this.value == 0 ? "aqua" : (this.value > 0 ? "greenyellow" : "red")
  }
}
