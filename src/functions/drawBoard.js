import getDifferentials from "@functions/getDifferentials";
import isolate from "@functions/isolate";
import getConfig from "@functions/getConfig";

export default function drawBoard(canvas, board) {
  const [dx, dy] = getDifferentials(canvas);

  isolate(canvas, (context) => {
    for (let i = 0; i < getConfig("rows"); i++) {
      for (let p = 0; p < getConfig("cols"); p++) {
        if (!board[i][p]) {
          continue;
        }

        context.fillStyle = "white";
        context.fillRect(p * dx, i * dy, dx, dy);
        context.fill();
      }
    }
  });
}
