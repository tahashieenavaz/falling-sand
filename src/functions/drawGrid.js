import get2DContext from "./get2DContext";
import drawRows from "./drawRows";
import drawCols from "./drawCols";

export default function drawGrid(canvas, rows, cols) {
  const context = get2DContext(canvas);
  const dx = canvas.width / cols;
  const dy = canvas.height / rows;
  drawRows(canvas, rows, dy);
  drawCols(canvas, cols, dx);
}
