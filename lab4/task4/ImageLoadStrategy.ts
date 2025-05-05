export interface ImageLoadStrategy {
  loadImage(source: string): Promise<string>;
  canHandle(source: string): boolean;
}
