import { BaseCharacter } from "./BaseCharacter";

export class Mage extends BaseCharacter {
  constructor(name: string) {
    super(name);
    this.attack = 4;
    this.defense = 4;
    this.magicPower = 12;
  }

  getDescription(): string {
    return `Mage ${this.name}`;
  }
}
