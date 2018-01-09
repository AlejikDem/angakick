import { Injectable } from '@angular/core';
import { Cell } from './types/cell';

import { getRandomNumInRange } from './utils';

const defaultCell: Cell = {
  showed: false,
  clicked: false,
};
const PLAY_TIME = 10;
const cells = Array.apply(null, { length: 9 }).map((item, index) => Object.assign({}, defaultCell));

@Injectable()
export class GameService {
  isGame: boolean = false;
  score: number = 0;
  timer: number = PLAY_TIME;
  cells: Cell[] = cells;

  constructor() { }

  startGame(){
    this.isGame = true;
    this.runTimer();
    this.showTargets();
  }

  stopGame(){
    this.isGame = false;
  }

  addScore(){
    this.score += 10;
  }

  showTargets(){
    const interval = setInterval(() => {
      const num =  getRandomNumInRange(8);
      const item = this.cells[num];
      item.showed = true;
      const timeout = setTimeout(() => {
        item.showed = false;
      }, 1000);

      if (!this.isGame) clearInterval(interval);
    }, 500);
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
