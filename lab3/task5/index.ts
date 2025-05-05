import { LightElementNode } from "./LightElementNode";
import { LightTextNode } from "./LightTextNode";

const div = new LightElementNode("div", true, false, ["container"]);

const h1 = new LightElementNode("h1");
h1.addChild(new LightTextNode("Hello World!"));
div.addChild(h1);

const p = new LightElementNode("p", true, false, ["text-muted"]);
p.addChild(new LightTextNode("This is a paragraph."));
div.addChild(p);

const img = new LightElementNode("img", false, true);
div.addChild(img);

console.log("Inner HTML:");
console.log(div.innerHTML());

console.log("Outer HTML:");
console.log(div.outerHTML());
