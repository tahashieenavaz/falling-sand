import isolate from "./isolate";

export default function drawBoard(canvas, board) {
  isolate(canvas, (context) => {
    for (let i = 0; i < getConfig("rows"); i++) {
      for (let p = 0; p < getConfig("cols"); p++) {
        if (!board[i][p]) {
          continue;
        }

        isolate(canvas, (context) => {
          context.fillStyle = "white";
          context.fillRect(i * dx, p * dy, dx, dy);
          context.fill();
        });
      }
    }
  });
}
