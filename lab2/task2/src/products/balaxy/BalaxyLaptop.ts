import { ILaptop } from "../interfaces/ILaptop";

export class BalaxyLaptop implements ILaptop {
  getDescription(): string {
    return "Balaxy Book Pro - High-performance business laptop";
  }

  getScreenSize(): number {
    return 15.6;
  }

  getProcessorInfo(): string {
    return "Intel Core i9-13900H with 14 cores";
  }
}
