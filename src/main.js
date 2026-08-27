import "./style.css";
import createCanvas from "@functions/createCanvas";
import appendBody from "@functions/appendBody";
import drawGrid from "@functions/drawGrid";
import drawBoard from "@functions/drawBoard";
import isolate from "@functions/isolate";
import createBoard from "@functions/createBoard";
import updateBoard from "@functions/updateBoard";
import getConfig from "@functions/getConfig";
import getDifferentials from "@functions/getDifferentials";
import getDimensions from "@functions/getDimensions";
import CanvasEvents from "./namespaces/CanvasEvents";

const [ROWS, COLS] = getDimensions();
const canvas = createCanvas();
const [dx, dy] = getDifferentials(canvas);

appendBody(canvas);

const board = createBoard(ROWS, COLS);

canvas.addEventListener("mousedown", CanvasEvents.mousedown);
canvas.addEventListener("mouseup", CanvasEvents.mouseup);
canvas.addEventListener("mousemove", (event) => {
  CanvasEvents.mousemove(event, canvas, board);
});

(function animate() {
  isolate(canvas, (context) =>
    context.clearRect(0, 0, canvas.width, canvas.height),
  );
  drawGrid(canvas, ROWS, COLS);
  drawBoard(canvas, board);
  updateBoard(board);
  requestAnimationFrame(animate);
})();
