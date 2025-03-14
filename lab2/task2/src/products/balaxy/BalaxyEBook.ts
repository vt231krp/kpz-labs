import { IEBook } from "../interfaces/IEBook";

export class BalaxyEBook implements IEBook {
  getDescription(): string {
    return "Balaxy Tab S9 - Premium Android tablet with e-reader functionality";
  }

  getScreenType(): string {
    return "Dynamic AMOLED 2X display";
  }

  getStorageSize(): number {
    return 512;
  }
}
