import { HtmlConverter } from "./HtmlConverter";
import { HtmlElementFlyweightFactory } from "./HtmlElementFlyweightFactory";
import fs from "fs";

const bookContent = fs.readFileSync("book.txt", "utf-8");
const converter = new HtmlConverter();
const htmlTree = converter.convertToHtml(bookContent);
const factory = HtmlElementFlyweightFactory.getInstance();

console.log("HTML Output:");
console.log(htmlTree.outerHTML());

// fs.writeFileSync("book.html", htmlTree.outerHTML(), "utf-8");

console.log("\nMemory Usage:");
console.log(`Size: ~${factory.getMemoryUsage()} bytes`);
console.log(`Unique elements created: ${factory.getElementsCount()}`);
