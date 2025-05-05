export class DocumentMemento {
  private content: string;
  private timestamp: Date;

  constructor(content: string) {
    this.content = content;
    this.timestamp = new Date();
  }

  getContent(): string {
    return this.content;
  }

  getTimestamp(): Date {
    return this.timestamp;
  }
}
