import clearBoard from "@functions/clearBoard"

export default function clearBoard(canvas) {
    isolate(canvas, context => {
      context.clearRect(0, 0, canvas.width, canvas.height),
    })
}