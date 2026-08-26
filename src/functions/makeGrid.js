import get2DContext from "./get2DContext";

export default function makeGrid(canvas, rows, cols) {
  const context = get2DContext(canvas);
  const dx = canvas.width / cols;
  const dy = canvas.height / rows;

  for (let i = 0; i < rows - 1; i++) {
    const y = (i + 1) * dy;
    context.beginPath();
    context.moveTo(0, y);
    context.lineTo(canvas.width, y);
    context.strokeStyle = "white";
    context.stroke();
    context.closePath();
  }

  for (let i = 0; i < rows - 1; i++) {
    const x = (i + 1) * dx;
    context.beginPath();
    context.moveTo(x, 0);
    context.lineTo(x, canvas.height);
    context.strokeStyle = "white";
    context.stroke();
    context.closePath();
  }
}
