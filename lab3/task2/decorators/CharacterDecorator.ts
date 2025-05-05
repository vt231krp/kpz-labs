import { ICharacter } from "../interfaces/ICharacter";

export abstract class CharacterDecorator implements ICharacter {
  protected character: ICharacter;

  constructor(character: ICharacter) {
    this.character = character;
  }

  getName(): string {
    return this.character.getName();
  }

  getAttack(): number {
    return this.character.getAttack();
  }

  getDefense(): number {
    return this.character.getDefense();
  }

  getMagicPower(): number {
    return this.character.getMagicPower();
  }

  getDescription(): string {
    return this.character.getDescription();
  }
}
