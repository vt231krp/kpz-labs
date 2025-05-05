import { Warrior } from "./characters/Warrior";
import { Mage } from "./characters/Mage";
import { Paladin } from "./characters/Paladin";
import { ArmorDecorator } from "./decorators/ArmorDecorator";
import { WeaponDecorator } from "./decorators/WeaponDecorator";
import { ArtifactDecorator } from "./decorators/ArtifactDecorator";
import { ICharacter } from "./interfaces/ICharacter";

let warrior: ICharacter = new Warrior("Conan");
let mage: ICharacter = new Mage("Gandalf");
let paladin: ICharacter = new Paladin("Uther");

console.log("Original Warrior:");
console.log(warrior.getDescription());
console.log(
  `Attack: ${warrior.getAttack()}, Defense: ${warrior.getDefense()}, Magic: ${warrior.getMagicPower()}\n`
);

warrior = new ArmorDecorator(warrior, "Plate Mail", 5);
warrior = new WeaponDecorator(warrior, "Great Sword", 8);

console.log("Equipped Warrior:");
console.log(warrior.getDescription());
console.log(
  `Attack: ${warrior.getAttack()}, Defense: ${warrior.getDefense()}, Magic: ${warrior.getMagicPower()}\n`
);

console.log("Original Mage:");
console.log(mage.getDescription());
console.log(
  `Attack: ${mage.getAttack()}, Defense: ${mage.getDefense()}, Magic: ${mage.getMagicPower()}\n`
);

mage = new ArtifactDecorator(mage, "Staff of Power", 7);
mage = new ArmorDecorator(mage, "Mystic Robes", 3);
mage = new ArtifactDecorator(mage, "Magic Ring", 4);

console.log("Equipped Mage:");
console.log(mage.getDescription());
console.log(
  `Attack: ${mage.getAttack()}, Defense: ${mage.getDefense()}, Magic: ${mage.getMagicPower()}\n`
);

console.log("Original Paladin:");
console.log(paladin.getDescription());
console.log(
  `Attack: ${paladin.getAttack()}, Defense: ${paladin.getDefense()}, Magic: ${paladin.getMagicPower()}\n`
);

paladin = new ArmorDecorator(paladin, "Holy Armor", 6);
paladin = new WeaponDecorator(paladin, "Divine Hammer", 5);
paladin = new ArtifactDecorator(paladin, "Sacred Amulet", 3);

console.log("Equipped Paladin:");
console.log(paladin.getDescription());
console.log(
  `Attack: ${paladin.getAttack()}, Defense: ${paladin.getDefense()}, Magic: ${paladin.getMagicPower()}\n`
);
