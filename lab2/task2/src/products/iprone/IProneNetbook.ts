import { INetbook } from "../interfaces/INetbook";

export class IProneNetbook implements INetbook {
  getDescription(): string {
    return "IProne MacBook Air - Ultra-thin ultraportable laptop";
  }

  getWeight(): number {
    return 1.24;
  }

  getBatteryLife(): number {
    return 18;
  }
}
