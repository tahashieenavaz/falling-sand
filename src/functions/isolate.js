import get2DContext from "./get2DContext";

export default function isolate(canvas, callback) {
  const context = get2DContext(canvas);
  context.beginPath();
  callback(context);
  context.closePath();
}
