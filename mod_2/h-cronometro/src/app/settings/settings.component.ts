import { Component, Input } from '@angular/core';
import { Exercise } from '../types';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css'],
})
export class SettingsComponent {
  exercise: Exercise = {
    name: '',
    duration: 30,
    times: 3,
    preparation: 15,
    rest: 30,
  };

  @Input() exercises: Exercise[] = [];

  constructor() {}

  addExercise() {
    this.exercises.push({ ...this.exercise });
    this.exercise = { ...this.exercise, name: '' };
  }

  deleteExercise(index: number) {
    this.exercises.splice(index, 1);
  }
}
