import { IDeviceFactory } from "./IDeviceFactory";
import { ILaptop } from "../products/interfaces/ILaptop";
import { INetbook } from "../products/interfaces/INetbook";
import { IEBook } from "../products/interfaces/IEBook";
import { ISmartphone } from "../products/interfaces/ISmartphone";
import { IProneLaptop } from "../products/iprone/IProneLaptop";
import { IProneNetbook } from "../products/iprone/IProneNetbook";
import { IProneEBook } from "../products/iprone/IProneEBook";
import { IProneSmartphone } from "../products/iprone/IProneSmartphone";

export class IProneFactory implements IDeviceFactory {
  createLaptop(): ILaptop {
    return new IProneLaptop();
  }

  createNetbook(): INetbook {
    return new IProneNetbook();
  }

  createEBook(): IEBook {
    return new IProneEBook();
  }

  createSmartphone(): ISmartphone {
    return new IProneSmartphone();
  }
}
