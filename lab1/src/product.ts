import { Money } from "./money";

export class Product {
  private name: string;
  private price: Money;

  constructor(name: string, price: Money) {
    this.name = name;
    this.price = price;
  }

  decreasePrice(amount: Money) {
    const totalCentsCurrent =
      this.price.getWholePart() * 100 + this.price.getFractionalPart();
    const totalCentsAmount =
      amount.getWholePart() * 100 + amount.getFractionalPart();
    const newTotalCents = totalCentsCurrent - totalCentsAmount;

    this.price.setValue(Math.floor(newTotalCents / 100), newTotalCents % 100);
  }

  display(): string {
    return `Product: ${this.name}; Price: ${this.price.display()}`;
  }

  getName(): string {
    return this.name;
  }

  getPrice(): Money {
    return this.price;
  }
}
