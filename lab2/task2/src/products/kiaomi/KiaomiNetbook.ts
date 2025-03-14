import { INetbook } from "../interfaces/INetbook";

export class KiaomiNetbook implements INetbook {
  getDescription(): string {
    return "Kiaomi MiBook Air - Lightweight and portable netbook";
  }

  getWeight(): number {
    return 1.3;
  }

  getBatteryLife(): number {
    return 12;
  }
}
