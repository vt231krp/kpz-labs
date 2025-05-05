import { CommandCentre } from "./CommandCentre";
import { Aircraft } from "./Aircraft";
import { Runway } from "./Runway";

function main() {
  // Create mediator
  const commandCentre = new CommandCentre();

  // Create runways
  const runway1 = new Runway("R1");
  const runway2 = new Runway("R2");

  // Register runways with mediator
  runway1.setMediator(commandCentre);
  runway2.setMediator(commandCentre);

  // Create aircraft
  const flight1 = new Aircraft("UA123");
  const flight2 = new Aircraft("BA456");
  const flight3 = new Aircraft("LH789");
  const flight4 = new Aircraft("SQ321");

  // Register aircraft with mediator
  flight1.setMediator(commandCentre);
  flight2.setMediator(commandCentre);
  flight3.setMediator(commandCentre);
  flight4.setMediator(commandCentre);

  console.log("\n--- Simulation Start ---\n");

  // Simulate landing requests
  flight1.requestLanding(); // Should get runway1
  flight2.requestLanding(); // Should get runway2
  flight3.requestLanding(); // Should be queued

  // Simulate departure
  setTimeout(() => {
    console.log("\n--- After 5 seconds ---\n");
    flight1.depart(); // Free up runway1

    // Let's simulate another landing request
    setTimeout(() => {
      console.log("\n--- After another 3 seconds ---\n");
      flight4.requestLanding(); // Should get next available runway
    }, 3000);
  }, 5000);
}

main();
