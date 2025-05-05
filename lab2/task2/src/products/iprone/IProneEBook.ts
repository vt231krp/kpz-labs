import { IEBook } from "../interfaces/IEBook";

export class IProneEBook implements IEBook {
  getDescription(): string {
    return "IProne iPad - Advanced tablet with e-reader capabilities";
  }

  getScreenType(): string {
    return "Liquid Retina display";
  }

  getStorageSize(): number {
    return 256;
  }
}
