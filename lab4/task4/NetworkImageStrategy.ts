import { ImageLoadStrategy } from "./ImageLoadStrategy";

export class NetworkImageStrategy implements ImageLoadStrategy {
  canHandle(source: string): boolean {
    return source.startsWith("http://") || source.startsWith("https://");
  }

  async loadImage(source: string): Promise<string> {
    try {
      console.log(`Fetching image from network: ${source}`);

      await new Promise((resolve) => setTimeout(resolve, 1000));

      return `[Image from network: ${new URL(source).pathname
        .split("/")
        .pop()}]`;
    } catch (error) {
      console.error(`Error loading image from network: ${error}`);
      return `[Error loading image: ${error}]`;
    }
  }
}
