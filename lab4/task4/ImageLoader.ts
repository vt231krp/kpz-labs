import { ImageLoadStrategy } from "./ImageLoadStrategy";
import { FileSystemImageStrategy } from "./FileSystemImageStrategy";
import { NetworkImageStrategy } from "./NetworkImageStrategy";

export class ImageLoader {
  private strategies: ImageLoadStrategy[] = [];

  constructor() {
    this.strategies.push(new NetworkImageStrategy());
    this.strategies.push(new FileSystemImageStrategy());
  }

  async loadImage(source: string): Promise<string> {
    const strategy = this.strategies.find((s) => s.canHandle(source));

    if (!strategy) {
      throw new Error(`No strategy found to handle image source: ${source}`);
    }

    return strategy.loadImage(source);
  }
}
