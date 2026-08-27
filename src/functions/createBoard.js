export default function createBoard(rows, cols) {
  return Array.from({ length: cols }, () => Array(rows).fill(0));
}
