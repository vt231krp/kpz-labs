import { LightElementNode } from "../../lab3/task5/LightElementNode";
import { ImageLoader } from "./ImageLoader";

export class LightImageNode extends LightElementNode {
  private src: string;
  private alt: string;
  private imageLoader: ImageLoader;
  private loadedContent: string = "";
  private isLoaded: boolean = false;

  constructor(src: string, alt: string = "") {
    super("img", false, true);
    this.src = src;
    this.alt = alt;
    this.imageLoader = new ImageLoader();
  }

  async load(): Promise<void> {
    if (!this.isLoaded) {
      try {
        this.loadedContent = await this.imageLoader.loadImage(this.src);
        this.isLoaded = true;
      } catch (error) {
        console.error(`Failed to load image: ${error}`);
        this.loadedContent = `[Failed to load: ${this.src}]`;
      }
    }
  }

  getLoadedContent(): string {
    return this.loadedContent;
  }

  outerHTML(): string {
    const altAttr = this.alt ? ` alt="${this.alt}"` : "";

    if (this.isLoaded) {
      return `<img src="${this.src}"${altAttr}/> <!-- ${this.loadedContent} -->`;
    } else {
      return `<img src="${this.src}"${altAttr}/>`;
    }
  }
}
