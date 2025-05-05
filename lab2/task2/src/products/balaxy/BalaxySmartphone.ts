import { ISmartphone } from "../interfaces/ISmartphone";

export class BalaxySmartphone implements ISmartphone {
  getDescription(): string {
    return "Balaxy S24 Ultra - High-end smartphone with S Pen support";
  }

  getCameraSpecs(): string {
    return "200MP main camera with 100x Space Zoom";
  }

  getOS(): string {
    return "One UI 6.1 based on Android 14";
  }
}
