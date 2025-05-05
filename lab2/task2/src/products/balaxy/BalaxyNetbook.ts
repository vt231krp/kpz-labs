import { INetbook } from "../interfaces/INetbook";

export class BalaxyNetbook implements INetbook {
  getDescription(): string {
    return "Balaxy Book Go - Ultra-portable netbook with LTE connectivity";
  }

  getWeight(): number {
    return 1.38;
  }

  getBatteryLife(): number {
    return 15;
  }
}
