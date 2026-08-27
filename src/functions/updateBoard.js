import getConfig from "@functions/getConfig";
import createBoard from "@functions/createBoard";

export default function updateBoard(board) {
  for (let i = getConfig("rows") - 2; i >= 0; i--) {
    for (let p = 0; p < getConfig("cols"); p++) {
      if (board[i][p] === 1 && board[i + 1][p] === 0) {
        board[i][p] = 0;
        board[i + 1][p] = 1;
      }
    }
  }
}
