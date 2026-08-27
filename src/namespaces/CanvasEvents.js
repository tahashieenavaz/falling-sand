import getConfig from "@functions/getConfig";

export default class CanvasEvents {
  static isMouseDown = false;

  static mousedown() {
    CanvasEvents.isMouseDown = true;
  }

  static mouseup() {
    CanvasEvents.isMouseDown = false;
  }

  static mousemove(event, canvas, board) {
    if (!CanvasEvents.isMouseDown) {
      return;
    }

    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const indexX = Math.floor((x / canvas.width) * getConfig("cols"));
    const indexY = Math.floor((y / canvas.height) * getConfig("rows"));
    board[indexX][indexY] = 1;
  }
}
