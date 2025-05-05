import { Person } from "./Person";

export interface IPersonBuilder {
  setName(name: string): this;
  setHeight(height: number): this;
  setEyesColor(color: string): this;
  setMood(mood: string): this;
  build(): Person;
}
