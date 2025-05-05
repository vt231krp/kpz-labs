import { IDeviceFactory } from "./IDeviceFactory";
import { ILaptop } from "../products/interfaces/ILaptop";
import { INetbook } from "../products/interfaces/INetbook";
import { IEBook } from "../products/interfaces/IEBook";
import { ISmartphone } from "../products/interfaces/ISmartphone";
import { KiaomiLaptop } from "../products/kiaomi/KiaomiLaptop";
import { KiaomiNetbook } from "../products/kiaomi/KiaomiNetbook";
import { KiaomiEBook } from "../products/kiaomi/KiaomiEBook";
import { KiaomiSmartphone } from "../products/kiaomi/KiaomiSmartphone";

export class KiaomiFactory implements IDeviceFactory {
  createLaptop(): ILaptop {
    return new KiaomiLaptop();
  }

  createNetbook(): INetbook {
    return new KiaomiNetbook();
  }

  createEBook(): IEBook {
    return new KiaomiEBook();
  }

  createSmartphone(): ISmartphone {
    return new KiaomiSmartphone();
  }
}
