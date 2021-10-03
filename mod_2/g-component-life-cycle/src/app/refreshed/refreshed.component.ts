import { Component, OnInit, OnDestroy, Input } from '@angular/core';

@Component({
  selector: 'app-refreshed',
  templateUrl: './refreshed.component.html',
  styleUrls: ['./refreshed.component.css'],
})
export class RefreshedComponent implements OnInit, OnDestroy {
  @Input() id: number = 0;
  interval: any;

  constructor() {}

  ngOnInit(): void {
    this.interval = setInterval(
      () => console.log(`Component ${this.id} refreshed.`),
      1000
    );
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }
}
