export abstract class LightNode {
  abstract outerHTML(): string;
  abstract innerHTML(): string;

  abstract addEventListener(
    eventType: string,
    listener: (event: any) => void
  ): void;
  abstract removeEventListener(
    eventType: string,
    listener: (event: any) => void
  ): void;
  abstract dispatchEvent(eventType: string, detail?: any): void;
}
