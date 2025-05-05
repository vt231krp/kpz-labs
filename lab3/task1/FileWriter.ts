import fs from "fs";

export class FileWriter {
  private filePath: string;

  constructor(filePath: string) {
    this.filePath = filePath;
  }

  write(content: string): void {
    fs.writeFileSync(this.filePath, content, { flag: "a" });
  }

  writeLine(content: string): void {
    fs.writeFileSync(this.filePath, content + "\n", { flag: "a" });
  }
}
