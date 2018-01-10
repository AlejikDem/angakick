import { Component, OnInit, OnDestroy } from '@angular/core';
import { kick } from '../utils';
import { GameService } from '../game.service';

@Component({
  selector: 'app-hammer',
  templateUrl: './hammer.component.html',
  styleUrls: ['./hammer.component.css']
})
export class HammerComponent implements OnInit, OnDestroy {
  image: HTMLElement;
  onMove: (e: any) => void = e => {
    this.image.style.left = `${e.pageX + 15}px`;
    this.image.style.top = `${e.pageY - 80}px`;
  };
  onDown: (e: any) => void = e => {
    this.gameService.countCombo(e.target.classList);
    kick();
    this.image.style.transform = 'rotate(-90deg)';
  }
  onUp: (e: any) => void = e => {
    this.image.style.transform = 'rotate(-55deg)';
  }

  constructor(private gameService: GameService) { }

  ngOnInit() {
    this.image = document.getElementById('img-cursor');
    document.addEventListener('mousemove', this.onMove);
    document.addEventListener('mousedown', this.onDown);
    document.addEventListener('mouseup', this.onUp);
  }

  ngOnDestroy() {
    document.removeEventListener('mousemove', this.onMove);
    document.removeEventListener('mousedown', this.onDown);
    document.removeEventListener('mouseup', this.onUp);
  }

  logger(e){
    console.log(e)
  }

}
