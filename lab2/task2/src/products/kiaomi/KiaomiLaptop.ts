import { ILaptop } from "../interfaces/ILaptop";

export class KiaomiLaptop implements ILaptop {
  getDescription(): string {
    return "Kiaomi NoteBook Pro - Affordable yet powerful laptop";
  }

  getScreenSize(): number {
    return 15.6;
  }

  getProcessorInfo(): string {
    return "Intel Core i7-12700H";
  }
}
