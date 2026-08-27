import CanvasEvents from "@namespaces/CanvasEvents";

export default function addCanvasEvents(canvas, board) {
  canvas.addEventListener("mousedown", CanvasEvents.mousedown);
  canvas.addEventListener("mouseup", CanvasEvents.mouseup);
  canvas.addEventListener("mousemove", (event) => {
    CanvasEvents.mousemove(event, canvas, board);
  });
}
