import Repository from "./classes/Repository";

export function repo(key) {
  return Repository[key];
}
