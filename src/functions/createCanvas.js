import createElement from "./createElement";

export default function createCanvas(
  width = innerWidth / 2,
  height = innerHeight / 2,
) {
  const $element = createElement("canvas");
  $element.width = width;
  $element.height = height;
  return $element;
}
