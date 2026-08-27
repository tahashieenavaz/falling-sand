import "./style.css";
import createCanvas from "@functions/createCanvas";
import appendBody from "@functions/appendBody";
import drawGrid from "@functions/drawGrid";
import drawBoard from "@functions/drawBoard";
import isolate from "@functions/isolate";
import createBoard from "@functions/createBoard";
import updateBoard from "@functions/updateBoard";
import getConfig from "@functions/getConfig";
import getDifferentials from "./functions/getDifferentials";

const ROWS = getConfig("rows");
const COLS = getConfig("cols");

const canvas = createCanvas();
const [dx, dy] = getDifferentials(canvas);

appendBody(canvas);

const whiteRectangles = [];
const board = createBoard(ROWS, COLS);
let isMouseDown = false;

canvas.addEventListener("mousedown", () => {
  isMouseDown = true;
});
canvas.addEventListener("mouseup", () => {
  isMouseDown = false;
});
canvas.addEventListener("mousemove", (event) => {
  if (!isMouseDown) {
    return;
  }

  const rect = canvas.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;
  const indexX = Math.floor((x / canvas.width) * COLS);
  const indexY = Math.floor((y / canvas.height) * ROWS);
  board[indexX][indexY] = 1;
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
