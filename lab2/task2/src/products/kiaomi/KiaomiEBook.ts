import { IEBook } from "../interfaces/IEBook";

export class KiaomiEBook implements IEBook {
  getDescription(): string {
    return "Kiaomi MiPad - Affordable tablet with e-reader mode";
  }

  getScreenType(): string {
    return "IPS LCD display";
  }

  getStorageSize(): number {
    return 128;
  }
}
