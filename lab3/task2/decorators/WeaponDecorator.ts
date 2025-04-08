import { CharacterDecorator } from "./CharacterDecorator";
import { ICharacter } from "../interfaces/ICharacter";

export class WeaponDecorator extends CharacterDecorator {
  private weaponType: string;
  private attackBonus: number;

  constructor(character: ICharacter, weaponType: string, attackBonus: number) {
    super(character);
    this.weaponType = weaponType;
    this.attackBonus = attackBonus;
  }

  getAttack(): number {
    return super.getAttack() + this.attackBonus;
  }

  getDescription(): string {
    return `${super.getDescription()} wielding ${this.weaponType}`;
  }
}
