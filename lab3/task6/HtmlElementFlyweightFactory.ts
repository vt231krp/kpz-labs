import { LightElementNode } from "../task5/LightElementNode";
import { LightTextNode } from "../task5/LightTextNode";

export class HtmlElementFlyweightFactory {
  private static instance: HtmlElementFlyweightFactory;
  private elements: Map<string, LightElementNode> = new Map();

  private constructor() {}

  static getInstance(): HtmlElementFlyweightFactory {
    if (!HtmlElementFlyweightFactory.instance) {
      HtmlElementFlyweightFactory.instance = new HtmlElementFlyweightFactory();
    }
    return HtmlElementFlyweightFactory.instance;
  }

  createElement(type: string, content: string): LightElementNode {
    const key = `${type}-${content}`;

    if (!this.elements.has(key)) {
      const element = new LightElementNode(type);
      element.addChild(new LightTextNode(content));
      this.elements.set(key, element);
    }

    return this.elements.get(key)!;
  }

  getElementsCount(): number {
    return this.elements.size;
  }

  getMemoryUsage(): number {
    let total = 0;
    this.elements.forEach((element, key) => {
      total += key.length * 2; // key string size
      total += element.outerHTML().length * 2; // content size
      total += 48; // approximate object overhead
    });
    return total;
  }
}
