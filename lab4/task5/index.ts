import { TextEditor } from "./TextEditor";

// Create a simple editor instance
const editor = new TextEditor();

console.log("=== Text Editor with Undo/Redo Demo ===");

// Add some text
console.log("\nAdding text: 'Hello, '");
editor.addText("Hello, ");
console.log(`Current content: "${editor.getContent()}"`);
console.log(editor.getHistoryStatus());

// Add more text
console.log("\nAdding text: 'world!'");
editor.addText("world!");
console.log(`Current content: "${editor.getContent()}"`);
console.log(editor.getHistoryStatus());

// Add more text
console.log("\nAdding text: ' How are you?'");
editor.addText(" How are you?");
console.log(`Current content: "${editor.getContent()}"`);
console.log(editor.getHistoryStatus());

// Undo last change
console.log("\nUndo last change");
editor.undo();
console.log(`Current content: "${editor.getContent()}"`);
console.log(editor.getHistoryStatus());

// Undo again
console.log("\nUndo again");
editor.undo();
console.log(`Current content: "${editor.getContent()}"`);
console.log(editor.getHistoryStatus());

// Redo
console.log("\nRedo");
editor.redo();
console.log(`Current content: "${editor.getContent()}"`);
console.log(editor.getHistoryStatus());

// Make a new change after undo
console.log("\nAdding text: ' Welcome!'");
editor.addText(" Welcome!");
console.log(`Current content: "${editor.getContent()}"`);
console.log(editor.getHistoryStatus());

// Try to redo (should not work since we made a new change)
console.log("\nTrying to redo (should not work)");
const redoResult = editor.redo();
console.log(`Redo successful: ${redoResult}`);
console.log(`Current content: "${editor.getContent()}"`);
console.log(editor.getHistoryStatus());

// Replace all text
console.log("\nReplacing all text with: 'New document content'");
editor.replaceAllText("New document content");
console.log(`Current content: "${editor.getContent()}"`);
console.log(editor.getHistoryStatus());

// Undo after replace
console.log("\nUndo after replace");
editor.undo();
console.log(`Current content: "${editor.getContent()}"`);
console.log(editor.getHistoryStatus());
