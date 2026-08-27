import getConfig from "@functions/getConfig";

export default function getDifferentials(canvas) {
  const dx = canvas.width / getConfig("cols");
  const dy = canvas.height / getConfig("rows");
  return (dx, dy);
}
