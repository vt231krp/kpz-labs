export interface EventDetail {
  [key: string]: any;
}

export class EventObject {
  readonly type: string;
  readonly target: any;
  readonly detail: EventDetail;
  isPropagationStopped: boolean = false;

  constructor(type: string, target: any, detail: EventDetail = {}) {
    this.type = type;
    this.target = target;
    this.detail = detail;
  }

  stopPropagation(): void {
    this.isPropagationStopped = true;
  }
}

export type EventListener = (event: EventObject) => void;
