export class Virus {
  private weight: number;
  private age: number;
  private name: string;
  private type: string;
  private children: Virus[] = [];

  constructor(weight: number, age: number, name: string, type: string) {
    this.weight = weight;
    this.age = age;
    this.name = name;
    this.type = type;
  }

  addChild(child: Virus): void {
    this.children.push(child);
  }

  getChildren(): Virus[] {
    return this.children;
  }

  clone(): Virus {
    const clonedVirus = new Virus(
      this.weight,
      this.age,
      `Clone of ${this.name}`,
      this.type
    );

    for (const child of this.children) {
      clonedVirus.addChild(child.clone());
    }

    return clonedVirus;
  }

  display(indent: string = ""): void {
    console.log(`${indent}Virus: ${this.name}`);
    console.log(`${indent}Type: ${this.type}`);
    console.log(`${indent}Age: ${this.age}`);
    console.log(`${indent}Weight: ${this.weight}`);

    if (this.children.length > 0) {
      console.log(`${indent}Children:`);
      for (const child of this.children) {
        child.display(`${indent}  `);
      }
    }
  }

  getName(): string {
    return this.name;
  }

  setName(name: string): void {
    this.name = name;
  }

  getType(): string {
    return this.type;
  }

  getAge(): number {
    return this.age;
  }

  getWeight(): number {
    return this.weight;
  }
}
