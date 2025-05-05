import * as fs from "fs";
import * as path from "path";
import { ImageLoadStrategy } from "./ImageLoadStrategy";

export class FileSystemImageStrategy implements ImageLoadStrategy {
  canHandle(source: string): boolean {
    return !source.startsWith("http://") && !source.startsWith("https://");
  }

  async loadImage(source: string): Promise<string> {
    try {
      const fullPath = path.resolve(source);

      if (!fs.existsSync(fullPath)) {
        throw new Error(`File not found: ${fullPath}`);
      }

      const stats = fs.statSync(fullPath);
      const fileSize = (stats.size / 1024).toFixed(2);

      console.log(
        `Loaded image from file system: ${fullPath} (${fileSize} KB)`
      );

      return `[Image from file system: ${path.basename(source)}]`;
    } catch (error) {
      console.error(`Error loading image from file system: ${error}`);
      return `[Error loading image: ${error}]`;
    }
  }
}
