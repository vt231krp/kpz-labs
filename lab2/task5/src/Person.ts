export abstract class Person {
  protected name: string | null;
  protected height: number | null;
  protected eyesColor: string | null;
  protected mood: string | null;

  constructor(
    name: string | null,
    height: number | null,
    eyesColor: string | null,
    mood: string | null
  ) {
    this.name = name;
    this.height = height;
    this.eyesColor = eyesColor;
    this.mood = mood;
  }

  getName(): string | null {
    return this.name;
  }

  getHeight(): number | null {
    return this.height;
  }

  getEyesColor(): string | null {
    return this.eyesColor;
  }

  getMood(): string | null {
    return this.mood;
  }
}
