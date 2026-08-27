import isolate from "@functions/isolate";

export default function clearBoard(canvas) {
  isolate(canvas, (context) => {
    context.fillStyle = `rgba(19, 19, 19, 0.5)`;
    context.fillRect(0, 0, canvas.width, canvas.height);
  });
}
