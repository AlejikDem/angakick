import { Cell } from './types/cell';

export const PLAY_TIME: number = 10;
export const TARGET_ANIMATION_TIME: number = 1000;
export const MOVE_TIME: number = 500;
export const HIT_SCORE: number = 10;

export const DEFAULT_CELL: Cell = {
  showed: false,
  clicked: false,
};
export const CELLS: Cell[] = Array.apply(null, { length: 9 }).map((item, index) => Object.assign({}, DEFAULT_CELL));
