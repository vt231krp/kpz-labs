import { SupportSystem } from "./SupportSystem";

async function main() {
  const supportSystem = new SupportSystem();
  await supportSystem.start();
}

main().catch(console.error);
