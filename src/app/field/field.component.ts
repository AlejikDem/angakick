import { Component, OnInit } from '@angular/core';

import { GameService } from '../game.service';

const cells = Array.apply(null, { length: 9 }).map((item, index) => index);

@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.css']
})
export class FieldComponent implements OnInit {
  cells: number[] = cells;

  constructor(private gameService: GameService) {}

  ngOnInit() {}

}
