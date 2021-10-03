import {
  Component,
  OnInit,
  OnChanges,
  Input,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-changed',
  templateUrl: './changed.component.html',
  styleUrls: ['./changed.component.css'],
})
export class ChangedComponent implements OnInit, OnChanges {
  @Input() label: string = '';
  @Input() max: number = 0;
  count: number = 0;

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  increment() {
    if (this.count < this.max) {
      this.count++;
    }
  }
}
