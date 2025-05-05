import { IPersonBuilder } from "./IPersonBuilder";
import { Hero } from "./Hero";

export class HeroBuilder implements IPersonBuilder {
  private name: string | null = null;
  private height: number | null = null;
  private eyesColor: string | null = null;
  private mood: string | null = null;
  private superPower: string | null = null;
  private inventory: string[] = [];
  private goodDeeds: string[] = [];

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

  setSuperPower(power: string): this {
    this.superPower = power;
    return this;
  }

  addInventoryItem(item: string): this {
    this.inventory.push(item);
    return this;
  }

  addGoodDeed(deed: string): this {
    this.goodDeeds.push(deed);
    return this;
  }

  build(): Hero {
    const hero = new Hero(
      this.name,
      this.height,
      this.eyesColor,
      this.mood,
      this.superPower
    );

    console.log(
      `Hero ${this.name} created with ${this.goodDeeds.length} good deeds and ${this.inventory.length} inventory items`
    );
    if (this.goodDeeds.length > 0) {
      console.log(`Good deeds: ${this.goodDeeds.join(", ")}`);
    }
    if (this.inventory.length > 0) {
      console.log(`Inventory: ${this.inventory.join(", ")}`);
    }

    return hero;
  }
}
