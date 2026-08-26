import get2DContext from "./get2DContext";

export default function makeGrid(canvas, rows, cols) {
  const context = get2DContext(canvas);
  const dx = canvas.height / cols;
  const dy = canvas.width / rows;

  let y = dy;
  for (let i = 0; i < rows - 1; i++) {
    context.beginPath();
    context.moveTo(0, y);
    context.lineTo(canvas.width, -y);
    context.strokeStyle = "white";
    context.stroke();
    context.closePath();
    y += dy;
    console.log(dy, y, canvas.height);
  }
}
