import { Component, OnInit } from '@angular/core';

import { GameService } from '../game.service';

@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.css']
})
export class FieldComponent implements OnInit {
  constructor(private gameService: GameService) {}

  ngOnInit() {
    const image = document.getElementById('img-cursor');
    document.addEventListener('mousemove', e => {
      image.style.left = `${e.pageX + 15}px`;
      image.style.top = `${e.pageY - 80}px`;
    });

    document.addEventListener('mousedown', e => {
      image.style.transform = 'rotate(-90deg)';
    });

    document.addEventListener('mouseup', e => {
      image.style.transform = 'rotate(-55deg)';
    });
  }

}
