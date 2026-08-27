import getDimensions from "@functions/getDimensions";

export default function createBoard() {
  const [rows, cols] = getDimensions();
  return Array.from({ length: rows }, () => Array(cols).fill(0));
}
