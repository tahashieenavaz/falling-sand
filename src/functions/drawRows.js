import get2DContext from "./get2DContext";
import isolate from "./isolate";

export default function drawRows(canvas, rows, dy) {
  for (let i = 0; i < rows - 1; i++) {
    const y = (i + 1) * dy;
    isolate(canvas, (context) => {
      context.moveTo(0, y);
      context.lineTo(canvas.width, y);
      context.strokeStyle = "white";
      context.stroke();
    });
  }
}
