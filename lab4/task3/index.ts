import { LightElementNode } from "./LightElementNode";
import { LightTextNode } from "./LightTextNode";
import { EventObject } from "./EventTypes";

// Create a simple HTML structure
const div = new LightElementNode("div", true, false, ["container"]);
const h1 = new LightElementNode("h1");
const button = new LightElementNode("button");
const paragraph = new LightElementNode("p");

// Add text content
h1.addChild(new LightTextNode("Event Demo"));
button.addChild(new LightTextNode("Click me"));
paragraph.addChild(new LightTextNode("Hover over this paragraph"));

// Add elements to the DOM tree
div.addChild(h1);
div.addChild(button);
div.addChild(paragraph);

console.log("HTML Structure:");
console.log(div.outerHTML());
console.log("\n");

// Add event listeners
const clickHandler = (event: EventObject) => {
  console.log(`${event.target.tagName} was clicked!`);
};

const mouseoverHandler = (event: EventObject) => {
  console.log(`Mouse over ${event.target.tagName}`);
};

const mouseoutHandler = (event: EventObject) => {
  console.log(`Mouse out from ${event.target.tagName}`);
};

// Register event listeners
button.addEventListener("click", clickHandler);
paragraph.addEventListener("mouseover", mouseoverHandler);
paragraph.addEventListener("mouseout", mouseoutHandler);

console.log("Registered events for elements:");
console.log(`- ${button.tagName}: click event`);
console.log(`- ${paragraph.tagName}: mouseover, mouseout events`);
console.log("\n");

// Simulate events
console.log("Simulating events:");
button.dispatchEvent("click");
paragraph.dispatchEvent("mouseover");
paragraph.dispatchEvent("mouseout");

// Event with custom data
button.addEventListener("customEvent", (event) => {
  console.log(`Custom event received with value: ${event.detail.value}`);
});

console.log("\nSimulating custom event with data:");
button.dispatchEvent("customEvent", { value: 42 });

// Remove event listener and try again
console.log("\nRemoving click event and trying again:");
button.removeEventListener("click", clickHandler);
button.dispatchEvent("click"); // Should not trigger anything
console.log("(No output because listener was removed)");
