import "./style.css";
import createCanvas from "@functions/createCanvas";
import appendBody from "@functions/appendBody";
import drawGrid from "@functions/drawGrid";
import drawBoard from "@functions/drawBoard";
import isolate from "@functions/isolate";
import getConfig from "@functions/getConfig";
import getDifferentials from "@functions/getDifferentials";
import getDimensions from "@functions/getDimensions";

import createBoard from "@functions/createBoard";
import updateBoard from "@functions/updateBoard";
import clearBoard from "@functions/clearBoard";

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
let lastUpdate = 0;

(function animate(timestamp) {
  if (timestamp - lastUpdate > 1000) {
    lastUpdate = timestamp;
    clearBoard(canvas);
    updateBoard(board);
  }
  drawGrid(canvas, ROWS, COLS);
  drawBoard(canvas, board);
  requestAnimationFrame(animate);
})();
