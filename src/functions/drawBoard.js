import isolate from "./isolate";

export default function drawBoard(canvas, board) {
  isolate(canvas, (context) => {
    for (row in board) {
      for (col in row) {
        print(row, col);
      }
    }
  });
}
