import CanvasEvents from "@namespaces/CanvasEvents";

export default function addCanvasEvents(canvas, board) {
  canvas.addEventListener("mousedown", CanvasEvents.mousedown);
  canvas.addEventListener("mouseup", CanvasEvents.mouseup);
  canvas.addEventListener("mousemove", (event) => {
    const grid = board.get();
    CanvasEvents.mousemove(event, canvas, grid);
  });
}
