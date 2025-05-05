import { LightNode } from "./LightNode";

export class LightTextNode extends LightNode {
  private text: string;

  constructor(text: string) {
    super();
    this.text = text;
  }

  outerHTML(): string {
    return this.text;
  }

  innerHTML(): string {
    return this.text;
  }

  addEventListener(eventType: string, listener: (event: any) => void): void {}

  removeEventListener(
    eventType: string,
    listener: (event: any) => void
  ): void {}

  dispatchEvent(eventType: string, detail?: any): void {}
}
