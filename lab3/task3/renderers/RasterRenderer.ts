import { IRenderer } from "./IRenderer";

export class RasterRenderer implements IRenderer {
  render(shape: string): void {
    console.log(`Drawing ${shape} as pixels`);
  }
}
