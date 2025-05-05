import fs from "fs";
import { ISmartTextReader } from "./ISmartTextReader";

export class SmartTextReader implements ISmartTextReader {
  private filePath: string;
  private fileContent: string = "";

  constructor(filePath: string) {
    this.filePath = filePath;
  }

  readFile(): void {
    this.fileContent = fs.readFileSync(this.filePath, "utf-8");
  }

  getContentAs2DArray(): string[][] {
    return this.fileContent.split(/\r?\n/).map((line) => line.split(""));
  }

  getFilePath(): string {
    return this.filePath;
  }
}
