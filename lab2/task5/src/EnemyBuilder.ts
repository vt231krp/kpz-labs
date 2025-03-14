import { IPersonBuilder } from "./IPersonBuilder";
import { Enemy } from "./Enemy";

export class EnemyBuilder implements IPersonBuilder {
  private name: string | null = null;
  private height: number | null = null;
  private eyesColor: string | null = null;
  private mood: string | null = null;
  private damage: number | null = null;
  private evilDeeds: string[] = [];
  private weapons: string[] = [];

  setName(name: string): this {
    this.name = name;
    return this;
  }

  setHeight(height: number): this {
    this.height = height;
    return this;
  }

  setEyesColor(color: string): this {
    this.eyesColor = color;
    return this;
  }

  setMood(mood: string): this {
    this.mood = mood;
    return this;
  }

  setDamage(damage: number): this {
    this.damage = damage;
    return this;
  }

  addEvilDeed(deed: string): this {
    this.evilDeeds.push(deed);
    return this;
  }

  addWeapon(weapon: string): this {
    this.weapons.push(weapon);
    return this;
  }

  build(): Enemy {
    const enemy = new Enemy(
      this.name,
      this.height,
      this.eyesColor,
      this.mood,
      this.damage
    );

    console.log(
      `Enemy ${this.name} created with ${this.damage} damage power, ${this.evilDeeds.length} evil deeds, and ${this.weapons.length} weapons`
    );
    if (this.evilDeeds.length > 0) {
      console.log(`Evil deeds: ${this.evilDeeds.join(", ")}`);
    }
    if (this.weapons.length > 0) {
      console.log(`Weapons: ${this.weapons.join(", ")}`);
    }

    return enemy;
  }
}
