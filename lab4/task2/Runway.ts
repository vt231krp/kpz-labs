import { IMediator } from "./IMediator";
import { IColleague } from "./IColleague";

export class Runway implements IColleague {
  private mediator: IMediator | null = null;
  private isAvailable: boolean = true;
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  setMediator(mediator: IMediator): void {
    this.mediator = mediator;
    this.mediator.registerRunway(this);
  }

  land(): boolean {
    if (this.isAvailable) {
      this.isAvailable = false;
      console.log(`Runway ${this.name} is now occupied`);
      return true;
    } else {
      console.log(`Runway ${this.name} is currently not available`);
      return false;
    }
  }

  depart(): void {
    this.isAvailable = true;
    console.log(`Runway ${this.name} is now available`);
    this.mediator?.notify(this, "runwayFreed");
  }

  getStatus(): boolean {
    return this.isAvailable;
  }

  getName(): string {
    return this.name;
  }
}
