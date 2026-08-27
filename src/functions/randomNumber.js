export default function randomNumber(min, max, inclusive = true) {
  const d = inclusive ? max - min + 1 : max - min;
  return min + Math.floor(d * Math.random());
}
