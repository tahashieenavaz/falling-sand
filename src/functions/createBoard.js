export default function createBoard(...args) {
  if (args.length != 2) {
    throw new Error("createBoard accepts two args: rows, cols.");
  }

  return Array.from({ length: args[0] }, () => Array(args[1]).fill(0));
}
