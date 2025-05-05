import { FileLoggerAdapter } from "./FileLoggerAdapter";

const fileLogger = new FileLoggerAdapter("log.txt");

fileLogger.log("This is a log message.");
fileLogger.error("This is an error message.");
fileLogger.warn("This is a warning message.");
