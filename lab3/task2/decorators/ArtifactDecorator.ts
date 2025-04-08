import { CharacterDecorator } from "./CharacterDecorator";
import { ICharacter } from "../interfaces/ICharacter";

export class ArtifactDecorator extends CharacterDecorator {
  private artifactName: string;
  private magicPowerBonus: number;

  constructor(
    character: ICharacter,
    artifactName: string,
    magicPowerBonus: number
  ) {
    super(character);
    this.artifactName = artifactName;
    this.magicPowerBonus = magicPowerBonus;
  }

  getMagicPower(): number {
    return super.getMagicPower() + this.magicPowerBonus;
  }

  getDescription(): string {
    return `${super.getDescription()} equipped with ${this.artifactName}`;
  }
}
