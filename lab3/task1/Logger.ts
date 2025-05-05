import { ILogger } from "./ILogger";

export class Logger implements ILogger {
  log(message: string): void {
    console.log(`\x1b[32m%s\x1b[0m`, message);
  }

  error(message: string): void {
    console.error(`\x1b[31m%s\x1b[0m`, message);
  }

  warn(message: string): void {
    console.warn(`\x1b[38;5;214m%s\x1b[0m`, message);
  }
}
