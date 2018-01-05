import { Injectable } from '@angular/core';

const PLAY_TIME = 10;

@Injectable()
export class GameService {
  isGame: boolean = true;
  score: number = 0;
  timer: number = PLAY_TIME;

  constructor() { }

  startGame(){
    this.isGame = true;
    this.runTimer();

  }

  stopGame(){
    this.isGame = false;
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
