import { TextDocument } from "./TextDocument";
import { DocumentHistory } from "./DocumentHistory";

export class TextEditor {
  private document: TextDocument;
  private history: DocumentHistory;

  constructor() {
    this.document = new TextDocument();
    this.history = new DocumentHistory();
    this.saveState();
  }

  addText(text: string): void {
    this.document.addText(text);
    this.saveState();
  }

  replaceAllText(newText: string): void {
    this.document.replaceText(newText);
    this.saveState();
  }

  deleteLastCharacter(): void {
    this.document.deleteLastCharacter();
    this.saveState();
  }

  getContent(): string {
    return this.document.getContent();
  }

  saveState(): void {
    this.history.addMemento(this.document.save());
  }

  undo(): boolean {
    const previousMemento = this.history.getPreviousMemento();
    if (previousMemento) {
      this.document.restore(previousMemento);
      return true;
    }
    return false;
  }

  redo(): boolean {
    const nextMemento = this.history.getNextMemento();
    if (nextMemento) {
      this.document.restore(nextMemento);
      return true;
    }
    return false;
  }

  getHistoryStatus(): string {
    return `History: ${
      this.history.getCurrentPosition() + 1
    }/${this.history.getHistorySize()}`;
  }
}
