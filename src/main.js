import "./style.css";
import createCanvas from "@functions/createCanvas";
import appendBody from "@functions/appendBody";
import makeGrid from "@functions/makeGrid";
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
const board = createBoard();

canvas.addEventListener("mousedown", (event) => {
  const rect = canvas.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;

  const indexX = Math.floor((x / canvas.width) * COLS);
  const indexY = Math.floor((y / canvas.height) * ROWS);

  whiteRectangles.push([indexX, indexY]);
});

(function animate() {
  isolate(canvas, (context) =>
    context.clearRect(0, 0, canvas.width, canvas.height),
  );
  isolate(canvas, (context) => {
    context.fillStyle = "white";
    context.fillRect(rectangle[0] * dx, rectangle[1] * dy, dx, dy);
    context.fill();
  });
  makeGrid(canvas, ROWS, COLS);
  requestAnimationFrame(animate);
})();
