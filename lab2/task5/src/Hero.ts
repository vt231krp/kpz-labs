import { Person } from "./Person";

export class Hero extends Person {
  protected superPower: string | null;

  constructor(
    name: string | null,
    height: number | null,
    eyesColor: string | null,
    mood: string | null,
    superPower: string | null
  ) {
    super(name, height, eyesColor, mood);
    this.superPower = superPower;
  }

  getSuperPower(): string | null {
    return this.superPower;
  }
}
