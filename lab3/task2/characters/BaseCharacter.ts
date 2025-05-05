import { ICharacter } from "../interfaces/ICharacter";

export abstract class BaseCharacter implements ICharacter {
  protected name: string;
  protected attack: number = 0;
  protected defense: number = 0;
  protected magicPower: number = 0;

  constructor(name: string) {
    this.name = name;
  }

  getName(): string {
    return this.name;
  }

  getAttack(): number {
    return this.attack;
  }

  getDefense(): number {
    return this.defense;
  }

  getMagicPower(): number {
    return this.magicPower;
  }

  abstract getDescription(): string;
}
