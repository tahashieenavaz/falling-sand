import Collection from "./Collection";
import Repository from "./Repository";

export default class Engine {
  constructor() {
    this.doc = document.body || document.documentElement;
    this.createCanvas();
    this.createGrid();
    this.addElements();
  }

  /**
   * The addElement function appends an element to the document.
   * @param element - The "element" parameter is the element that you want to add to the document. It can
   * be any valid HTML element, such as a div, span, p, etc.
   */
  addElement(element) {
    this.doc.appendChild(element);
  }

  addElements() {
    this.addElement(Repository.canvas);
  }

  /**
   * The function creates a grid with the dimensions of the inner window width and height.
   */
  createGrid() {
    Repository.grid = new Collection(innerWidth, innerHeight);
  }

  createCanvas() {
    Repository.canvas = document.createElement("canvas");
    Repository.context = Repository.canvas.getContext("2d");

    /* The code `Repository.canvas.width = innerWidth;` sets the width of the canvas element to the width
    of the browser window. Similarly, `Repository.canvas.height = innerHeight;` sets the height of the
    canvas element to the height of the browser window. This ensures that the canvas element covers the
    entire visible area of the browser window. */
    Repository.canvas.width = innerWidth;
    Repository.canvas.height = innerHeight;
  }
}
