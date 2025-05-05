import { ISmartphone } from "../interfaces/ISmartphone";

export class KiaomiSmartphone implements ISmartphone {
  getDescription(): string {
    return "Kiaomi Mi 14 - Feature-rich smartphone with competitive price";
  }

  getCameraSpecs(): string {
    return "50MP main camera with 8K video recording";
  }

  getOS(): string {
    return "KIUI 15 based on Android 14";
  }
}
