import { DocumentMemento } from "./DocumentMemento";

export class TextDocument {
  private content: string;

  constructor() {
    this.content = "";
  }

  getContent(): string {
    return this.content;
  }

  addText(text: string): void {
    this.content += text;
  }

  replaceText(newText: string): void {
    this.content = newText;
  }

  deleteLastCharacter(): void {
    if (this.content.length > 0) {
      this.content = this.content.substring(0, this.content.length - 1);
    }
  }

  save(): DocumentMemento {
    return new DocumentMemento(this.content);
  }

  restore(memento: DocumentMemento): void {
    this.content = memento.getContent();
  }
}
