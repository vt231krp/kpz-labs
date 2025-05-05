import { Person } from "./Person";

export class Enemy extends Person {
  private damage: number | null;

  constructor(
    name: string | null,
    height: number | null,
    eyesColor: string | null,
    mood: string | null,
    damage: number | null
  ) {
    super(name, height, eyesColor, mood);
    this.damage = damage;
  }
  attack(target: Person): void {
    console.log(
      `${this.name} attacks ${target.getName()} for ${this.damage} damage`
    );
  }
}
