import get2DContext from "./get2DContext";
import makeRows from "./makeRows";
import makeCols from "./makeCols";

export default function makeGrid(canvas, rows, cols) {
  const context = get2DContext(canvas);
  const dx = canvas.width / cols;
  const dy = canvas.height / rows;
  makeRows(canvas, rows, dy);
  makeCols(canvas, cols, dx);
}
