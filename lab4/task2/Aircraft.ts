import { IMediator } from "./IMediator";
import { IColleague } from "./IColleague";

export class Aircraft implements IColleague {
  private mediator: IMediator | null = null;
  private flightNumber: string;
  private isWaitingToLand: boolean = false;

  constructor(flightNumber: string) {
    this.flightNumber = flightNumber;
  }

  setMediator(mediator: IMediator): void {
    this.mediator = mediator;
    this.mediator.registerAircraft(this);
  }

  requestLanding(): void {
    console.log(`Aircraft ${this.flightNumber} requesting permission to land`);
    this.isWaitingToLand = true;
    this.mediator?.notify(this, "requestLanding");
  }

  land(): void {
    this.isWaitingToLand = false;
    console.log(`Aircraft ${this.flightNumber} has landed successfully`);
  }

  depart(): void {
    console.log(`Aircraft ${this.flightNumber} requesting takeoff`);
    this.mediator?.notify(this, "requestTakeoff");
  }

  completeDeparture(): void {
    console.log(`Aircraft ${this.flightNumber} has successfully departed`);
    this.mediator?.notify(this, "completedDeparture");
  }

  getFlightNumber(): string {
    return this.flightNumber;
  }

  isWaiting(): boolean {
    return this.isWaitingToLand;
  }
}
