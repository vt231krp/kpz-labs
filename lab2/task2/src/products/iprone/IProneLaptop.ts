import { ILaptop } from "../interfaces/ILaptop";

export class IProneLaptop implements ILaptop {
  getDescription(): string {
    return "IProne MacBook Pro - Premium aluminum laptop with retina display";
  }

  getScreenSize(): number {
    return 16;
  }

  getProcessorInfo(): string {
    return "M3 Pro chip with 12-core CPU";
  }
}
