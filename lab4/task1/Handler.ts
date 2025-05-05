export interface Handler {
  setNext(handler: Handler): Handler;
  handle(issue: string): string | null;
}

export abstract class AbstractHandler implements Handler {
  private nextHandler: Handler | null = null;

  public setNext(handler: Handler): Handler {
    this.nextHandler = handler;
    return handler;
  }

  public handle(issue: string): string | null {
    if (this.nextHandler) {
      return this.nextHandler.handle(issue);
    }
    return null;
  }
}
