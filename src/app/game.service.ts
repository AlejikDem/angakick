import { Injectable } from '@angular/core';
import { Cell } from './types/cell';
import { PLAY_TIME, DEFAULT_CELL, CELLS, TARGET_ANIMATION_TIME, MOVE_TIME, HIT_SCORE } from './constants';

import { getRandomNumInRange } from './utils';

const defaultCell: Cell = {
  showed: false,
  clicked: false,
};

@Injectable()
export class GameService {
  isGame: boolean = false;
  score: number = 0;
  timer: number = PLAY_TIME;
  cells: Cell[] = CELLS;
  combo: number = 0;
  maxCombo: number = 0;

  constructor() { }

  startGame(){
    this.isGame = true;
    this.initCounters();
    this.runTimer();
    this.runTargets();
  }

  stopGame(){
    this.isGame = false;
  }

  initCounters() {
    this.score = 0;
    this.combo = 0;
  }

  addScore(){
    this.score += HIT_SCORE;
  }

  showTarget(){
    const item = this.cells[getRandomNumInRange(8)];

    if(item.showed) {
      this.showTarget();
    } else {
      item.showed = true;

      const timeout = setTimeout(() => {
        item.clicked = false;
        item.showed = false;
      }, TARGET_ANIMATION_TIME);
    }
  }

  runTargets(): void{
    const interval = setInterval(() => {
      this.showTarget();

      if (!this.isGame) clearInterval(interval);
    }, MOVE_TIME);
  }

  countCombo(classList: string[]): void {
    if (classList[classList.length - 1] === 'showed') {
      ++this.combo;
      if (this.combo > this.maxCombo) ++this.maxCombo;
    } else {
      this.combo = 0;
    }
  }

  hitTarget(clickedIndex: number): void{
    const item = this.cells[clickedIndex];
    if (!item.clicked) {
      item.clicked = true;
      this.addScore();
    }
  }

  runTimer(): void{
    this.timer = PLAY_TIME;
    const interval = setInterval(() => {
      --this.timer;

      if(this.timer === 0) {
        clearInterval(interval);
        this.stopGame();
      };
    }, 1000);
  }

}
