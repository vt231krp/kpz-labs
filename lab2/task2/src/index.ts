import { IDeviceFactory } from "./factories/IDeviceFactory";
import { IProneFactory } from "./factories/IProneFactory";
import { KiaomiFactory } from "./factories/KiaomiFactory";
import { BalaxyFactory } from "./factories/BalaxyFactory";

function createDevice(factory: IDeviceFactory, brand: string): void {
  console.log(`\n===== ${brand} Devices =====`);

  const laptop = factory.createLaptop();
  console.log("\nLaptop:");
  console.log(`- Description: ${laptop.getDescription()}`);
  console.log(`- Screen Size: ${laptop.getScreenSize()} inches`);
  console.log(`- Processor: ${laptop.getProcessorInfo()}`);

  const netbook = factory.createNetbook();
  console.log("\nNetbook:");
  console.log(`- Description: ${netbook.getDescription()}`);
  console.log(`- Weight: ${netbook.getWeight()} kg`);
  console.log(`- Battery Life: ${netbook.getBatteryLife()} hours`);

  const ebook = factory.createEBook();
  console.log("\nEBook:");
  console.log(`- Description: ${ebook.getDescription()}`);
  console.log(`- Screen Type: ${ebook.getScreenType()}`);
  console.log(`- Storage: ${ebook.getStorageSize()} GB`);

  const smartphone = factory.createSmartphone();
  console.log("\nSmartphone:");
  console.log(`- Description: ${smartphone.getDescription()}`);
  console.log(`- Camera: ${smartphone.getCameraSpecs()}`);
  console.log(`- Operating System: ${smartphone.getOS()}`);
}

createDevice(new IProneFactory(), "IProne");
createDevice(new KiaomiFactory(), "Kiaomi");
createDevice(new BalaxyFactory(), "Balaxy");
