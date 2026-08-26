import "./style.css";
import createCanvas from "@functions/createCanvas";
import appendBody from "@functions/appendBody";
import makeGrid from "@functions/makeGrid";

const canvas = createCanvas();
appendBody(canvas);
makeGrid(canvas, 10, 10);
