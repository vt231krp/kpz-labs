import { BaseCharacter } from "./BaseCharacter";

export class Warrior extends BaseCharacter {
  constructor(name: string) {
    super(name);
    this.attack = 10;
    this.defense = 8;
    this.magicPower = 0;
  }

  getDescription(): string {
    return `Warrior ${this.name}`;
  }
}
