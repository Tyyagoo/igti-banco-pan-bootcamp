import { Component } from '@angular/core';
import { PlayerType, MaybePlayer } from 'src/types/player';

@Component({
  selector: 'app-tic-tac-toe',
  templateUrl: './tic-tac-toe.component.html',
  styleUrls: ['./tic-tac-toe.component.css'],
})
export class TicTacToeComponent {
  currentPlayer: PlayerType;
  winner: MaybePlayer;
  board: MaybePlayer[][];
  running: boolean;

  constructor() {
    this.currentPlayer = PlayerType.X;
    this.winner = undefined;
    this.board = [
      [undefined, undefined, undefined],
      [undefined, undefined, undefined],
      [undefined, undefined, undefined],
    ];
    this.running = true;
  }

  onClickCell(x: number, y: number) {
    if (!this.running) return;

    if (this.board[x][y] == undefined) {
      this.board[x][y] = this.currentPlayer;
      this.switchPlayer();

      this.winner = this.verifyWinner();
      if (this.winner !== undefined || this.checkDraw()) {
        this.running = false;
      }
    }
  }

  verifyWinner() {
    const check = (player: PlayerType) => {
      return (p: MaybePlayer, _index: any, _array: any) => p === player;
    };
    const verify = (arr: MaybePlayer[]): MaybePlayer =>
      arr.every(check(PlayerType.X))
        ? PlayerType.X
        : arr.every(check(PlayerType.O))
        ? PlayerType.O
        : undefined;

    for (let i = 0; i < 3; i++) {
      let arr = [...this.board[i]];
      if (verify(arr) !== undefined) {
        return verify(arr);
      }
    }

    for (let j = 0; j < 3; j++) {
      let arr = [this.board[0][j], this.board[1][j], this.board[2][j]];
      if (verify(arr) !== undefined) {
        return verify(arr);
      }
    }

    let mainDiagonal = [this.board[0][0], this.board[1][1], this.board[2][2]];
    let subDiagonal = [this.board[0][2], this.board[1][1], this.board[2][0]];

    if (verify(mainDiagonal) !== undefined) {
      return verify(mainDiagonal);
    }

    if (verify(subDiagonal) !== undefined) {
      return verify(subDiagonal);
    }

    return undefined;
  }

  checkDraw() {
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (this.board[i][j] === undefined) {
          return false;
        }
      }
    }
    return true;
  }

  switchPlayer() {
    this.currentPlayer =
      this.currentPlayer === PlayerType.X ? PlayerType.O : PlayerType.X;
  }

  reset() {
    this.currentPlayer = PlayerType.X;
    this.winner = undefined;
    this.board = [
      [undefined, undefined, undefined],
      [undefined, undefined, undefined],
      [undefined, undefined, undefined],
    ];
    this.running = true;
  }
}
