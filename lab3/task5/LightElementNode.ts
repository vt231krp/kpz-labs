import { LightNode } from "./LightNode";

export class LightElementNode extends LightNode {
  public tagName: string;
  public isBlock: boolean;
  public isSelfClosing: boolean;
  public classNames: string[];
  public children: LightNode[];

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
}
