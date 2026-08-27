import createBoard from "@functions/createBoard";

export default class Board {
  constructor() {
    this.grid = createBoard();
  }

  get() {
    return this.grid;
  }

  reset() {
    this.grid = createBoard();
  }
}
