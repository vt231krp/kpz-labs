import { LightNode } from "./LightNode";
import { EventObject, EventListener } from "./EventTypes";

export class LightElementNode extends LightNode {
  public tagName: string;
  public isBlock: boolean;
  public isSelfClosing: boolean;
  public classNames: string[];
  public children: LightNode[];

  private eventListeners: Map<string, EventListener[]> = new Map();

  constructor(
    tagName: string,
    isBlock: boolean = true,
    isSelfClosing: boolean = false,
    classNames: string[] = [],
    children: LightNode[] = []
  ) {
    super();
    this.tagName = tagName;
    this.isBlock = isBlock;
    this.isSelfClosing = isSelfClosing;
    this.classNames = classNames;
    this.children = children;
  }

  innerHTML(): string {
    return this.children.map((child) => child.outerHTML()).join("");
  }

  outerHTML(): string {
    const classAttr =
      this.classNames.length > 0 ? ` class="${this.classNames.join(" ")}"` : "";
    if (this.isSelfClosing) {
      return `<${this.tagName}${classAttr}/>`;
    } else {
      return `<${this.tagName}${classAttr}>${this.innerHTML()}</${
        this.tagName
      }>`;
    }
  }

  addChild(child: LightNode): void {
    if (!this.isSelfClosing) {
      this.children.push(child);
    }
  }

  getChildCount(): number {
    return this.children.length;
  }

  addEventListener(eventType: string, listener: EventListener): void {
    if (!this.eventListeners.has(eventType)) {
      this.eventListeners.set(eventType, []);
    }

    const listeners = this.eventListeners.get(eventType);
    if (listeners && !listeners.includes(listener)) {
      listeners.push(listener);
    }
  }

  removeEventListener(eventType: string, listener: EventListener): void {
    if (!this.eventListeners.has(eventType)) return;

    const listeners = this.eventListeners.get(eventType);
    if (listeners) {
      const index = listeners.indexOf(listener);
      if (index !== -1) {
        listeners.splice(index, 1);
      }
    }
  }

  dispatchEvent(eventType: string, detail: any = {}): void {
    const event = new EventObject(eventType, this, detail);

    const listeners = this.eventListeners.get(eventType) || [];
    for (const listener of listeners) {
      listener(event);

      if (event.isPropagationStopped) {
        break;
      }
    }
  }
}
