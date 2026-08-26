import get2DContext from "./get2DContext";
import isolate from "./isolate";

export default function makeRows(canvas, rows, dy) {
  const context = get2DContext(canvas);

  for (let i = 0; i < rows - 1; i++) {
    const y = (i + 1) * dy;
    isolate(context, (context) => {
      context.moveTo(0, y);
      context.lineTo(canvas.width, y);
      context.strokeStyle = "white";
      context.stroke();
    });
  }
}
