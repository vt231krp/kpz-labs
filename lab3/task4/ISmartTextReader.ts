export interface ISmartTextReader {
  readFile(): void;
  getContentAs2DArray(): string[][];
  getFilePath(): string;
}
