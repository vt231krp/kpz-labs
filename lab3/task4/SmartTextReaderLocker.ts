import { ISmartTextReader } from "./ISmartTextReader";

export class SmartTextReaderLocker {
  private smartTextReader: ISmartTextReader;
  private regExp: RegExp;

  constructor(smartTextReader: ISmartTextReader, regExp: RegExp) {
    this.smartTextReader = smartTextReader;
    this.regExp = regExp;
  }

  isLocked(): boolean {
    const filePath = this.smartTextReader.getFilePath();
    return !this.regExp.test(filePath);
  }

  readFile(): void {
    if (this.isLocked()) {
      throw new Error("Access denied!");
    }
    this.smartTextReader.readFile();
  }

  getContentAs2DArray(): string[][] {
    if (this.isLocked()) {
      throw new Error("Access denied.");
    }
    return this.smartTextReader.getContentAs2DArray();
  }

  getFilePath(): string {
    if (this.isLocked()) {
      throw new Error("Access denied.");
    }
    return this.smartTextReader.getFilePath();
  }
}
