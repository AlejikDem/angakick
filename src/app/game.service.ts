import { Injectable } from '@angular/core';

const defaultCell = {
  state: 'hidden',
  clicked: false,
};
const PLAY_TIME = 10;
const cells = Array.apply(null, { length: 9 }).map((item, index) => defaultCell);

@Injectable()
export class GameService {
  isGame: boolean = true;
  score: number = 0;
  timer: number = PLAY_TIME;
  cells: string[] = cells;

  constructor() { }

  startGame(){
    this.isGame = true;
    this.runTimer();
  }

  stopGame(){
    this.isGame = false;
  }

  addScore(){
    this.score += 10;
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
