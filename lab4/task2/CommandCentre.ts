import { IMediator } from "./IMediator";
import { Aircraft } from "./Aircraft";
import { Runway } from "./Runway";

export class CommandCentre implements IMediator {
  private runways: Runway[] = [];
  private aircraft: Aircraft[] = [];
  private landingQueue: Aircraft[] = [];

  registerRunway(runway: Runway): void {
    this.runways.push(runway);
    console.log(`Runway ${runway.getName()} registered with Command Centre`);
  }

  registerAircraft(aircraft: Aircraft): void {
    this.aircraft.push(aircraft);
    console.log(
      `Aircraft ${aircraft.getFlightNumber()} registered with Command Centre`
    );
  }

  notify(sender: object, event: string): void {
    if (event === "requestLanding") {
      this.handleLandingRequest(sender as Aircraft);
    } else if (event === "requestTakeoff") {
      this.handleTakeoffRequest(sender as Aircraft);
    } else if (event === "completedDeparture") {
      this.handleDepartureCompleted(sender as Aircraft);
    } else if (event === "runwayFreed") {
      this.handleRunwayFreed();
    }
  }

  private handleLandingRequest(aircraft: Aircraft): void {
    const availableRunway = this.findAvailableRunway();
    if (availableRunway) {
      console.log(
        `Command Centre: Clearing ${aircraft.getFlightNumber()} for landing on runway ${availableRunway.getName()}`
      );
      availableRunway.land();
      aircraft.land();
    } else {
      console.log(
        `Command Centre: No runways available. ${aircraft.getFlightNumber()} added to landing queue`
      );
      this.landingQueue.push(aircraft);
    }
  }

  private handleTakeoffRequest(aircraft: Aircraft): void {
    const availableRunway = this.findAvailableRunway();
    if (availableRunway) {
      console.log(
        `Command Centre: Clearing ${aircraft.getFlightNumber()} for takeoff from runway ${availableRunway.getName()}`
      );
      availableRunway.land();
      setTimeout(() => {
        aircraft.completeDeparture();
        availableRunway.depart();
      }, 2000);
    } else {
      console.log(
        `Command Centre: Takeoff denied for ${aircraft.getFlightNumber()}. No available runways.`
      );
    }
  }

  private handleDepartureCompleted(aircraft: Aircraft): void {
    console.log(
      `Command Centre: Confirming departure of ${aircraft.getFlightNumber()}`
    );
  }

  private handleRunwayFreed(): void {
    if (this.landingQueue.length > 0) {
      const nextAircraft = this.landingQueue.shift();
      if (nextAircraft) {
        console.log(
          `Command Centre: Processing queued landing for ${nextAircraft.getFlightNumber()}`
        );
        this.handleLandingRequest(nextAircraft);
      }
    }
  }

  private findAvailableRunway(available: boolean = true): Runway | undefined {
    return this.runways.find((runway) => runway.getStatus() === available);
  }
}
