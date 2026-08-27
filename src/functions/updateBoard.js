import getConfig from "@functions/getConfig";

export default function updateBoard(board) {
  const skipCycle = createBoard();

  for (let i = 0; i < getConfig("rows") - 1; i++) {
    for (let p = 0; p < getConfig("cols"); p++) {
      if (board[i][p] == 1 && board[i][p + 1] == 0) {
        board[i][p] = 0;
        board[i][p + 1] = 1;
      }
    }
  }
}
