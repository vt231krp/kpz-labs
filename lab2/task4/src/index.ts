import { Virus } from "./Virus";

const grandparentVirus = new Virus(1.5, 10, "Alpha", "Coronavirus");

const parentVirus1 = new Virus(1.2, 5, "Beta", "Coronavirus");
const parentVirus2 = new Virus(1.0, 4, "Gamma", "Coronavirus");

const childVirus1 = new Virus(0.8, 1, "Delta", "Coronavirus");
const childVirus2 = new Virus(0.6, 1, "Epsilon", "Coronavirus");
const childVirus3 = new Virus(0.7, 2, "Zeta", "Coronavirus");

grandparentVirus.addChild(parentVirus1);
grandparentVirus.addChild(parentVirus2);

parentVirus1.addChild(childVirus1);
parentVirus1.addChild(childVirus2);
parentVirus2.addChild(childVirus3);

console.log("\nOriginal Virus Family:");
grandparentVirus.display();

console.log("\nCloning the entire virus family...");
const clonedVirusFamily = grandparentVirus.clone();

console.log("\nCloned Virus Family:");
clonedVirusFamily.display();

console.log("\nVerifying that clones are separate objects:");
console.log(`Original name: ${grandparentVirus.getName()}`);
console.log(`Clone name: ${clonedVirusFamily.getName()}`);

console.log("\nModifying the clone's name...");
clonedVirusFamily.setName("Modified Clone");

console.log(
  `\nOriginal name after modification: ${grandparentVirus.getName()}`
);
console.log(`Clone name after modification: ${clonedVirusFamily.getName()}`);
