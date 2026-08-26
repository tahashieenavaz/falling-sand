import "./style.css";
import createCanvas from "@functions/createCanvas";
import appendBody from "@functions/appendBody";
import makeGrid from "@functions/makeGrid";
import isolate from "@functions/isolate";

const ROWS = 100;
const COLS = 100;

const canvas = createCanvas();
appendBody(canvas);
makeGrid(canvas, ROWS, COLS);

canvas.addEventListener("mousedown", (event) => {
  const rect = canvas.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;

  const dx = canvas.width / COLS;
  const dy = canvas.height / ROWS;

  const indexX = Math.floor((x / canvas.width) * COLS);
  const indexY = Math.floor((y / canvas.height) * ROWS);

  isolate(canvas, (context) => {
    context.fillStyle = "white";
    context.fillRect(indexX * dx, indexY * dy, dx, dy);
    context.fill();
  });

  console.log(indexX, indexY);
});
