import { Shape } from "./Shape";
import { IRenderer } from "./renderers/IRenderer";

export class Square extends Shape {
  constructor(renderer: IRenderer) {
    super(renderer);
  }

  draw(): void {
    this.renderer.render("Square");
  }
}
