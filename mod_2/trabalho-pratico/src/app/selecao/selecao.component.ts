import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-selecao',
  templateUrl: './selecao.component.html',
  styleUrls: ['./selecao.component.css'],
})
export class SelecaoComponent {
  @Input() titulo: string = '';
  @Input() opcoes: string[] = [];
  @Input() escolhaAte: number = 0;

  selectedIndexes: number[] = [];

  constructor() {}

  isSelected(index: number) {
    return this.selectedIndexes.some((v) => v === index);
  }

  onChange(index: number) {
    if (this.escolhaAte <= 1) {
      return;
    }

    if (this.isSelected(index)) {
      this.selectedIndexes = this.selectedIndexes.filter((v) => v !== index);
    } else {
      this.selectedIndexes.push(index);
    }
  }

  checkIsDisabled(index: number) {
    if (this.escolhaAte === 1 || this.isSelected(index)) {
      return false;
    }

    return this.selectedIndexes.length === this.escolhaAte;
  }
}
