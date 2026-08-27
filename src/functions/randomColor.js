import randomNumber from "@functions/randomNumber";

export default function randomColor() {
  return `rgb(${randomNumber(0, 255)},${randomNumber(0, 255)}, ${randomNumber(0, 255)})`;
}
