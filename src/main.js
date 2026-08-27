import "./style.css";
import createCanvas from "@functions/createCanvas";
import appendBody from "@functions/appendBody";
import drawGrid from "@functions/drawGrid";
import isolate from "@functions/isolate";
import getConfig from "@functions/getConfig";
import getDifferentials from "@functions/getDifferentials";
import getDimensions from "@functions/getDimensions";

import drawBoard from "@functions/drawBoard";
import createBoard from "@functions/createBoard";
import updateBoard from "@functions/updateBoard";
import clearBoard from "@functions/clearBoard";

import CanvasEvents from "./namespaces/CanvasEvents";

const canvas = createCanvas();
const board = createBoard();
const [dx, dy] = getDifferentials(canvas);
const [ROWS, COLS] = getDimensions();

canvas.addEventListener("mousedown", CanvasEvents.mousedown);
canvas.addEventListener("mouseup", CanvasEvents.mouseup);
canvas.addEventListener("mousemove", (event) => {
  CanvasEvents.mousemove(event, canvas, board);
});
appendBody(canvas);

let lastUpdate = 0;

(function animate(timestamp) {
  clearBoard(canvas);
  drawGrid(canvas, ROWS, COLS);
  drawBoard(canvas, board);
  updateBoard(board);
  requestAnimationFrame(animate);
})();
