import "./style.css";
import createCanvas from "@functions/createCanvas";
import appendBody from "@functions/appendBody";
import makeGrid from "@functions/makeGrid";
import isolate from "@functions/isolate";
import createBoard from "./functions/createBoard";

const ROWS = 50;
const COLS = 50;

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
  makeGrid(canvas, ROWS, COLS);
  whiteRectangles.forEach((rectangle) => {
    isolate(canvas, (context) => {
      context.fillStyle = "white";
      context.fillRect(rectangle[0] * dx, rectangle[1] * dy, dx, dy);
      context.fill();
    });
    const nextRectangles = whiteRectangles.filter(
      (r) => rectangle[0] == r[0] && rectangle[1] == r[1] + 1,
    );
    console.log(nextRectangles.length);
    if (rectangle[1] < ROWS - 1 && !nextRectangles.length) {
      rectangle[1] += 0.5;
      if (rectangle[1] > ROWS - 1) {
        rectangle[1] = ROWS - 1;
      }
    }
  });

  requestAnimationFrame(animate);
})();
