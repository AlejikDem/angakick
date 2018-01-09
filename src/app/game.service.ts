import { Injectable } from '@angular/core';
import { Cell } from './types/cell';
import { PLAY_TIME, CELLS, TARGET_ANIMATION_TIME, MOVE_TIME, HIT_SCORE } from './constants';

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

  constructor() { }

  startGame(){
    this.isGame = true;
    this.runTimer();
    this.runTargets();
  }

  stopGame(){
    this.isGame = false;
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
        item.showed = false;
      }, TARGET_ANIMATION_TIME);
    }
  }

  runTargets(){
    const interval = setInterval(() => {
      this.showTarget();

      if (!this.isGame) clearInterval(interval);
    }, MOVE_TIME);
  }

  onClickTarget(clickedIndex: number){
    this.cells = this.cells.map((cell, ind) => {
      if (ind === clickedIndex) {
        cell.clicked = !cell.clicked;
        return cell;
      }
      return cell;
    })
  }

  runTimer(){
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
