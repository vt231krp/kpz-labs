import { BaseCharacter } from "./BaseCharacter";

export class Paladin extends BaseCharacter {
  constructor(name: string) {
    super(name);
    this.attack = 7;
    this.defense = 10;
    this.magicPower = 5;
  }

  getDescription(): string {
    return `Paladin ${this.name}`;
  }
}
