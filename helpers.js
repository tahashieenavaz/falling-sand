import Repository from "./classes/Repository";

/**
 * The function `repo` returns the value associated with the given key in the `Repository` object.
 * @param key - The "key" parameter is a string that represents the key of a repository in the
 * "Repository" object.
 * @returns The value of the Repository[key] is being returned.
 */
export function repo(key) {
  return Repository[key];
}

/**
 * The function "grid" returns the repository named "grid".
 * @returns the result of calling the `repo` function with the argument "grid".
 */
export function grid() {
  return repo("grid");
}

/**
 * The `arc` function draws a filled circle on a canvas at the specified coordinates with the specified
 * radius.
 * @param x - The x-coordinate of the center of the arc.
 * @param y - The parameter "y" represents the y-coordinate of the center of the arc.
 * @param [r=1] - The parameter "r" in the "arc" function represents the radius of the circle that will
 * be drawn. The default value for "r" is 1, which means that if no value is provided when calling the
 * function, the radius of the circle will be 1 unit.
 */
export function arc(x, y, r = 1) {
  repo("context").beginPath();
  repo("context").arc(x, y, r, 0, Math.PI * 2);
  repo("context").fillStyle = "white";
  repo("context").fill();
  repo("context").closePath();
}

/**
 * The function `arcIf` draws an arc at the specified coordinates if a given condition is true.
 * @param condition - A boolean value that determines whether or not to draw the arc.
 * @param x - The x-coordinate of the center of the arc.
 * @param y - The `y` parameter represents the y-coordinate of the center of the arc.
 * @param [r=1] - The parameter "r" in the "arcIf" function represents the radius of the arc. It is an
 * optional parameter with a default value of 1.
 */
export function arcIf(condition, x, y, r = 1) {
  if (condition) {
    arc(x, y, r);
  }
}

/**
 * The function "drawAllCircles" draws circles on a grid based on the values in the grid.
 */
export function drawAllCircles() {
  grid().forEach((i, p, value) => {
    arcIf(Boolean(value), i, p, 10);
  });
}
