import { ILogger } from "./ILogger";
import { FileWriter } from "./FileWriter";
import { Logger } from "./Logger";

export class FileLoggerAdapter implements ILogger {
  private fileWriter: FileWriter;
  private consoleLogger: Logger;

  constructor(filePath: string) {
    this.fileWriter = new FileWriter(filePath);
    this.consoleLogger = new Logger();
  }

  log(message: string): void {
    this.fileWriter.writeLine(`Log: ${message}`);
    this.consoleLogger.log(message);
  }

  error(message: string): void {
    this.fileWriter.writeLine(`Error: ${message}`);
    this.consoleLogger.error(message);
  }

  warn(message: string): void {
    this.fileWriter.writeLine(`Warn: ${message}`);
    this.consoleLogger.warn(message);
  }
}
