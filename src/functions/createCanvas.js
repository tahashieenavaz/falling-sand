export default function createCanvas(
  width = innerWidth / 2,
  height = innerHeight / 2,
) {
  const $element = document.createElement("canvas");
  $element.innerWidth = width;
  $element.innerHeight = height;
}
