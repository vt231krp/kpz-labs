import { ILaptop } from "../products/interfaces/ILaptop";
import { INetbook } from "../products/interfaces/INetbook";
import { IEBook } from "../products/interfaces/IEBook";
import { ISmartphone } from "../products/interfaces/ISmartphone";

export interface IDeviceFactory {
  createLaptop(): ILaptop;
  createNetbook(): INetbook;
  createEBook(): IEBook;
  createSmartphone(): ISmartphone;
}
