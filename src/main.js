import "./style.css";
import Board from "@classes/Board";

import appendBody from "@functions/appendBody";
import createCanvas from "@functions/createCanvas";

import isolate from "@functions/isolate";

import getConfig from "@functions/getConfig";
import getDifferentials from "@functions/getDifferentials";
import getDimensions from "@functions/getDimensions";

import drawGrid from "@functions/drawGrid";
import drawBoard from "@functions/drawBoard";
import createBoard from "@functions/createBoard";
import updateBoard from "@functions/updateBoard";
import clearBoard from "@functions/clearBoard";

import CanvasEvents from "@namespaces/CanvasEvents";
import addCanvasEvents from "@functions/addCanvasEvents";

let mode = "classic";

const canvas = createCanvas();
const board = new Board();
const [dx, dy] = getDifferentials(canvas);
const [ROWS, COLS] = getDimensions();

addCanvasEvents(canvas, board.get());
appendBody(canvas);

let lastUpdate = 0;

(function animate(timestamp) {
  clearBoard(canvas);
  drawGrid(canvas, ROWS, COLS);
  drawBoard(canvas, board.get(), mode);
  updateBoard(board.get());
  requestAnimationFrame(animate);
})();

Array.from(document.querySelectorAll("button"))
  .filter((button) => button.dataset.click)
  .forEach((button) => {
    button.addEventListener("click", (event) => {
      mode = button.dataset.click ?? "classic";
    });
  });

document.querySelector("button.reset").addEventListener("click", () => {
  board.reset();
});
