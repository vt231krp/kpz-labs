import { LightElementNode } from "../../lab3/task5/LightElementNode";
import { LightTextNode } from "../../lab3/task5/LightTextNode";
import { LightImageNode } from "./LightImageNode";

async function main() {
  console.log("=== LightHTML with Strategy Pattern Demo ===");

  const container = new LightElementNode("div", true, false, ["image-gallery"]);

  // Add a heading
  const heading = new LightElementNode("h1");
  heading.addChild(new LightTextNode("Image Gallery"));
  container.addChild(heading);

  // Create image elements with different sources
  const fileImage = new LightImageNode(
    "./images/local-image.jpg",
    "A local image"
  );
  const networkImage = new LightImageNode(
    "https://example.com/image.png",
    "A network image"
  );

  // Add images to container
  container.addChild(fileImage);
  container.addChild(networkImage);

  // Display initial HTML structure
  console.log("\nInitial HTML Structure:");
  console.log(container.outerHTML());

  // Load images using different strategies
  console.log("\nLoading images...");
  await fileImage.load();
  await networkImage.load();

  // Display HTML after loading
  console.log("\nHTML after loading images:");
  console.log(container.outerHTML());

  // Display the loaded content
  console.log("\nLoaded content:");
  console.log(`File image: ${fileImage.getLoadedContent()}`);
  console.log(`Network image: ${networkImage.getLoadedContent()}`);
}

main().catch(console.error);
