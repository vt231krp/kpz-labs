import { Warehouse } from "./warehouse";

export class Reporting {
  private warehouseItems: Warehouse[] = [];

  public registerArrival(warehouseItem: Warehouse): void {
    this.warehouseItems.push(warehouseItem);
    console.log(`Product ${warehouseItem.getProduct().getName()} has arrived.`);
  }

  public registerShipment(productName: string, quantity: number): void {
    const warehouseItem = this.warehouseItems.find(
      (item) => item.getProduct().getName() === productName,
    );
    if (warehouseItem && warehouseItem.getQuantity() >= quantity) {
      warehouseItem.updateQuantity(warehouseItem.getQuantity() - quantity);
      console.log(`${quantity} units of ${productName} have been shipped.`);
    } else {
      console.log(`Not enough stock for ${productName}.`);
    }
  }

  public inventoryReport(): void {
    console.log("Inventory Report:");
    this.warehouseItems.forEach((item) => console.log(item.display()));
  }
}
