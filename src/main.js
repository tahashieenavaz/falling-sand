import "./style.css";
import createCanvas from "@functions/createCanvas";
import appendBody from "@functions/appendBody";
import drawGrid from "@functions/drawGrid";
import drawBoard from "@functions/drawBoard";
import isolate from "@functions/isolate";
import createBoard from "@functions/createBoard";
import getConfig from "@functions/getConfig";

const ROWS = getConfig("rows");
const COLS = getConfig("cols");

const canvas = createCanvas();
const dx = canvas.width / COLS;
const dy = canvas.height / ROWS;

appendBody(canvas);

const whiteRectangles = [];
const board = createBoard(ROWS, COLS);

canvas.addEventListener("mousedown", (event) => {
  const rect = canvas.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;

  const indexX = Math.floor((x / canvas.width) * COLS);
  const indexY = Math.floor((y / canvas.height) * ROWS);

  console.log(indexX, indexY, board);
  board[indexX][indexY] = 1;
});

(function animate() {
  isolate(canvas, (context) =>
    context.clearRect(0, 0, canvas.width, canvas.height),
  );
  drawGrid(canvas, ROWS, COLS);
  drawBoard(canvas, board);
  requestAnimationFrame(animate);
})();
