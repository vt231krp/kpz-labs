import { DocumentMemento } from "./DocumentMemento";

export class DocumentHistory {
  private mementos: DocumentMemento[] = [];
  private currentPosition: number = -1;

  addMemento(memento: DocumentMemento): void {
    if (this.currentPosition < this.mementos.length - 1) {
      this.mementos = this.mementos.slice(0, this.currentPosition + 1);
    }

    this.mementos.push(memento);
    this.currentPosition = this.mementos.length - 1;
  }

  getNextMemento(): DocumentMemento | null {
    if (this.currentPosition < this.mementos.length - 1) {
      this.currentPosition++;
      return this.mementos[this.currentPosition];
    }
    return null;
  }

  getPreviousMemento(): DocumentMemento | null {
    if (this.currentPosition > 0) {
      this.currentPosition--;
      return this.mementos[this.currentPosition];
    }
    return null;
  }

  getHistorySize(): number {
    return this.mementos.length;
  }

  getCurrentPosition(): number {
    return this.currentPosition;
  }
}
