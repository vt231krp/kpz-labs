export interface IMediator {
  notify(sender: object, event: string): void;
  registerRunway(runway: any): void;
  registerAircraft(aircraft: any): void;
}
