import get2DContext from "./get2DContext";

export default function makeCols(canvas, cols, dx) {
  const context = get2DContext(canvas);

  for (let i = 0; i < cols - 1; i++) {
    const x = (i + 1) * dx;
    context.beginPath();
    context.moveTo(x, 0);
    context.lineTo(x, canvas.height);
    context.strokeStyle = "white";
    context.stroke();
    context.closePath();
  }
}
