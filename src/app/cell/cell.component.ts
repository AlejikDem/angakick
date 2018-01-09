import { Component, OnInit, Input } from '@angular/core';
import { Cell } from '../types/cell';

import { GameService } from '../game.service';

@Component({
  inputs: ['cell', 'index'],
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.css']
})

export class CellComponent implements OnInit {
  cell: Cell;
  index: number;

  constructor(private gameService: GameService) { }

  ngOnInit() {}

}
