import { SmartTextReader } from "./SmartTextReader";
import { SmartTextChecker } from "./SmartTextChecker";
import { SmartTextReaderLocker } from "./SmartTextReaderLocker";

console.log("SmartTextReader Test");
const smartReader = new SmartTextReader("test.txt");
smartReader.readFile();
const readerContent = smartReader.getContentAs2DArray();
console.log(readerContent);

console.log("SmartTextChecker Test");
const smartChecker = new SmartTextChecker(smartReader);
smartChecker.readFile();
const checkerContent = smartChecker.getContentAs2DArray();
console.log(checkerContent);

try {
  console.log("SmartTextReaderLocker Test");
  const locker = new SmartTextReaderLocker(smartReader, /\.csv$/);
  locker.readFile();
  const lockerContent = locker.getContentAs2DArray();
  console.log(lockerContent);
} catch (err: any) {
  console.error("Error:", err.message);
}
