import { Component, Input } from '@angular/core';
import { Exercise } from '../types';

type Phase = 'Preparação' | 'Exercício' | 'Descanso';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css'],
})
export class TimerComponent {
  currentExercise: number = 0;
  currentRepetition: number = 1;
  currentPhase: Phase = 'Preparação';

  @Input() exercises: Exercise[] = [];

  constructor() {}

  restart() {
    this.currentExercise = 0;
    this.currentRepetition = 1;
    this.currentPhase = 'Preparação';
  }

  next() {
    switch (this.currentPhase) {
      case 'Preparação':
        this.currentPhase = 'Exercício';
        break;
      case 'Exercício':
        let ex = this.exercises[this.currentExercise];
        if (ex.times > this.currentRepetition) {
          this.currentRepetition++;
        } else {
          this.currentPhase = 'Descanso';
        }

        break;
      case 'Descanso':
        this.currentPhase = 'Preparação';
        this.currentExercise++;
        this.currentRepetition = 1;
        if (this.exercises.length <= this.currentExercise) {
          while (this.exercises.pop() !== undefined);
        }
        break;
    }
  }
}
