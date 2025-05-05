import { IRenderer } from "./IRenderer";

export class VectorRenderer implements IRenderer {
  render(shape: string): void {
    console.log(`Drawing ${shape} as vector graphics`);
  }
}
