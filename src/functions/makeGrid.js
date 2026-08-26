import get2DContext from "get2DContext";

export default function makeGrid(canvas, rows, cols) {
  const context = get2DContext(canvas);
  const dx = canvas.height / cols;
  const dy = canvas.width / rows;
  console.log(dx, dy);
}
