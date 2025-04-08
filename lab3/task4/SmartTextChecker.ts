import { ISmartTextReader } from "./ISmartTextReader";

export class SmartTextChecker implements ISmartTextReader {
  private reader: ISmartTextReader;

  constructor(reader: ISmartTextReader) {
    this.reader = reader;
  }

  readFile(): void {
    console.log(`Opening file: ${this.reader.getFilePath()}`);
    this.reader.readFile();
    console.log("File successfully read");
  }

  getContentAs2DArray(): string[][] {
    const content = this.reader.getContentAs2DArray();

    const totalLines = content.length;
    const totalChars = content
      .reduce((acc, line) => acc.concat(line), [])
      .join("").length;

    console.log(`File statistics:`);
    console.log(`- Total lines: ${totalLines}`);
    console.log(`- Total characters: ${totalChars}`);
    console.log("Closing file");

    return content;
  }

  getFilePath(): string {
    return this.reader.getFilePath();
  }
}
