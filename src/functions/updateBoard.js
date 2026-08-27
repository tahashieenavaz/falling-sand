import getConfig from "@functions/getConfig";

export default function updateBoard(board) {
  for (let i = 0; i < getConfig("") - 1; i++) {
    for (let p = 0; p < getConfig("cols"); p++) {
      if (board[p][i] == 1 && board[p + 1][i] == 0) {
        board[p][i] = 0;
        board[p + 1][i] = 1;
      }
    }
  }
}
