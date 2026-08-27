import getDifferentials from "@functions/getDifferentials";
import isolate from "@functions/isolate";
import getConfig from "@functions/getConfig";
import randomColor from "@functions/randomColor";

export default function drawBoard(canvas, board, mode = "classic") {
  const [dx, dy] = getDifferentials(canvas);

  isolate(canvas, (context) => {
    for (let i = 0; i < getConfig("rows"); i++) {
      for (let p = 0; p < getConfig("cols"); p++) {
        if (!board[i][p]) {
          continue;
        }
        if (mode == "classic") {
          context.fillStyle = "white";
        } else if (mode == "rainbow") {
          context.fillStyle = randomColor();
        }
        context.fillRect(p * dx, i * dy, dx, dy);
        context.fill();
      }
    }
  });
}
