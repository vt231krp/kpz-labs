import { ISmartphone } from "../interfaces/ISmartphone";

export class IProneSmartphone implements ISmartphone {
  getDescription(): string {
    return "IProne 15 Pro - Premium smartphone with titanium frame";
  }

  getCameraSpecs(): string {
    return "48MP main camera, 12MP ultra-wide, 12MP telephoto";
  }

  getOS(): string {
    return "iOS 17";
  }
}
