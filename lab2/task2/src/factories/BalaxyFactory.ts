import { IDeviceFactory } from "./IDeviceFactory";
import { ILaptop } from "../products/interfaces/ILaptop";
import { INetbook } from "../products/interfaces/INetbook";
import { IEBook } from "../products/interfaces/IEBook";
import { ISmartphone } from "../products/interfaces/ISmartphone";
import { BalaxyLaptop } from "../products/balaxy/BalaxyLaptop";
import { BalaxyNetbook } from "../products/balaxy/BalaxyNetbook";
import { BalaxyEBook } from "../products/balaxy/BalaxyEBook";
import { BalaxySmartphone } from "../products/balaxy/BalaxySmartphone";

export class BalaxyFactory implements IDeviceFactory {
  createLaptop(): ILaptop {
    return new BalaxyLaptop();
  }

  createNetbook(): INetbook {
    return new BalaxyNetbook();
  }

  createEBook(): IEBook {
    return new BalaxyEBook();
  }

  createSmartphone(): ISmartphone {
    return new BalaxySmartphone();
  }
}
