import { VectorRenderer } from "./renderers/VectorRenderer";
import { RasterRenderer } from "./renderers/RasterRenderer";
import { Circle } from "./Circle";
import { Square } from "./Square";
import { Triangle } from "./Triangle";

const vectorRenderer = new VectorRenderer();
const rasterRenderer = new RasterRenderer();

console.log("Vector Rendering:");
const vectorCircle = new Circle(vectorRenderer);
const vectorSquare = new Square(vectorRenderer);
const vectorTriangle = new Triangle(vectorRenderer);

vectorCircle.draw();
vectorSquare.draw();
vectorTriangle.draw();

console.log("\nRaster Rendering:");
const rasterCircle = new Circle(rasterRenderer);
const rasterSquare = new Square(rasterRenderer);
const rasterTriangle = new Triangle(rasterRenderer);

rasterCircle.draw();
rasterSquare.draw();
rasterTriangle.draw();
