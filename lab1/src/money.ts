export class Money {
  private wholePart: number;
  private fractionalPart: number;
  private currency: string;

  constructor(wholePart: number, fractionalPart: number, currency: string) {
    this.wholePart = wholePart;
    this.fractionalPart = fractionalPart;
    this.currency = currency;
  }

  display(): string {
    return `${this.currency}${this.wholePart}.${this.fractionalPart}`;
  }

  setValue(wholePart: number, fractionalPart: number): void {
    this.wholePart = wholePart;
    this.fractionalPart = fractionalPart;
  }

  getWholePart(): number {
    return this.wholePart;
  }

  getFractionalPart(): number {
    return this.fractionalPart;
  }
}
