import { Component, OnInit, Input } from '@angular/core';
import { Cell } from '../types/cell';

@Component({
  inputs: ['cell'],
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.css']
})

export class CellComponent implements OnInit {
  cell: Cell;

  constructor() { }

  ngOnInit() { }

}
