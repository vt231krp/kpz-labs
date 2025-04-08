import { LightElementNode } from "../task5/LightElementNode";
import { HtmlElementFlyweightFactory } from "./HtmlElementFlyweightFactory";

export class HtmlConverter {
  private factory: HtmlElementFlyweightFactory;

  constructor() {
    this.factory = HtmlElementFlyweightFactory.getInstance();
  }

  convertToHtml(text: string): LightElementNode {
    const lines = text.split("\n").filter((line) => line.trim());
    const rootElement = new LightElementNode("div");

    lines.forEach((line, index) => {
      let element: LightElementNode;

      if (index === 0) {
        element = this.factory.createElement("h1", line);
      } else if (line.length < 20) {
        element = this.factory.createElement("h2", line);
      } else if (line.startsWith(" ") || line.startsWith("\t")) {
        element = this.factory.createElement("blockquote", line.trim());
      } else {
        element = this.factory.createElement("p", line);
      }

      rootElement.addChild(element);
    });

    return rootElement;
  }
}
