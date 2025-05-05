import * as readline from "readline";
import { Handler } from "./Handler";
import {
  TechnicalSupportHandler,
  BillingHandler,
  AccountHandler,
  GeneralInquiryHandler,
} from "./ConcreteHandlers";

export class SupportSystem {
  private handler: Handler;
  private rl: readline.Interface;

  constructor() {
    const technical = new TechnicalSupportHandler();
    const billing = new BillingHandler();
    const account = new AccountHandler();
    const general = new GeneralInquiryHandler();

    technical.setNext(billing).setNext(account).setNext(general);

    this.handler = technical;

    this.rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
  }

  public async start(): Promise<void> {
    console.log("Welcome to our Support System!");
    await this.showMainMenu();
  }

  private async showMainMenu(): Promise<void> {
    console.log("\nPlease select your issue type:");
    console.log("1. Technical problem with device");
    console.log("2. Billing or payment issue");
    console.log("3. Account access problem");
    console.log("4. General information");
    console.log("5. Something else (custom description)");

    const choice = await this.askQuestion("Enter your choice (1-5): ");

    let issue = "";
    switch (choice) {
      case "1":
        issue = "technical problem with my device not working";
        break;
      case "2":
        issue = "bill payment and charge";
        break;
      case "3":
        issue = "account login and password";
        break;
      case "4":
        issue = "general information inquiry and question";
        break;
      case "5":
        issue = await this.askQuestion("Please describe your issue: ");
        break;
      default:
        console.log("Invalid choice, please try again.");
        return this.showMainMenu();
    }

    const result = this.handler.handle(issue.toLowerCase());

    if (result) {
      console.log("\n" + result);
      console.log("Thank you for using our support system!");
      this.rl.close();
    } else {
      console.log(
        "\nSorry, we could not determine the appropriate department for your issue."
      );
      const retry = await this.askQuestion(
        "Would you like to try again? (yes/no): "
      );

      if (retry.toLowerCase() === "yes") {
        return this.showMainMenu();
      } else {
        console.log("Thank you for contacting us. Goodbye!");
        this.rl.close();
      }
    }
  }

  private askQuestion(query: string): Promise<string> {
    return new Promise((resolve) => {
      this.rl.question(query, (answer) => {
        resolve(answer);
      });
    });
  }
}
