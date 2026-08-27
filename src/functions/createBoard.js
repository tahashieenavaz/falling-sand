export default function createBoard(...args) {
  if (args.length != 2) {
    throw new Error("createBoard accepts two args: rows, cols.");
  }

  return Array.from({ length: args[1] }, () => Array(args[0]).fill(0));
}
