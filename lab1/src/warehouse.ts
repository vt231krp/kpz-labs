import { Product } from "./product";

export class Warehouse {
  private product: Product;
  private quantity: number;
  private unit: string;
  private lastArrivalDate: Date;

  constructor(
    product: Product,
    quantity: number,
    unit: string,
    lastArrivalDate: Date,
  ) {
    this.product = product;
    this.quantity = quantity;
    this.unit = unit;
    this.lastArrivalDate = lastArrivalDate;
  }

  public updateQuantity(newQuantity: number): void {
    this.quantity = newQuantity;
  }

  public display(): string {
    return `${this.product.getName()} - ${this.product.getPrice().display()}, Quantity: ${this.quantity}, Last arrival: ${this.lastArrivalDate.toLocaleString()}`;
  }

  public getProduct(): Product {
    return this.product;
  }

  public getQuantity(): number {
    return this.quantity;
  }
}
