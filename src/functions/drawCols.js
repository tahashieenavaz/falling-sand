import get2DContext from "./get2DContext";
import isolate from "./isolate";

export default function drawCols(canvas, cols, dx) {
  for (let i = 0; i < cols - 1; i++) {
    const x = (i + 1) * dx;
    isolate(canvas, (context) => {
      context.moveTo(x, 0);
      context.lineTo(x, canvas.height);
      context.strokeStyle = "white";
      context.stroke();
    });
  }
}
