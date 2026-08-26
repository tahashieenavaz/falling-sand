export default function isolate(context, callback) {
  context.beginPath();
  callback(context);
  context.closePath();
}
