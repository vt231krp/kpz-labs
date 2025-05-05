import { CharacterDecorator } from "./CharacterDecorator";
import { ICharacter } from "../interfaces/ICharacter";

export class ArmorDecorator extends CharacterDecorator {
  private armorType: string;
  private defenseBonus: number;

  constructor(character: ICharacter, armorType: string, defenseBonus: number) {
    super(character);
    this.armorType = armorType;
    this.defenseBonus = defenseBonus;
  }

  getDefense(): number {
    return super.getDefense() + this.defenseBonus;
  }

  getDescription(): string {
    return `${super.getDescription()} wearing ${this.armorType}`;
  }
}
