import { ISubscription } from "../subscriptions/ISubscription";
import { DomesticSubscription } from "../subscriptions/DomesticSubscription";
import { EducationalSubscription } from "../subscriptions/EducationalSubscription";
import { PremiumSubscription } from "../subscriptions/PremiumSubscription";
import { ISubscriptionFactory } from "./ISubscriptionFactory";
import { SubscriptionType } from "../types/SubscriptionTypes";
import { Feature } from "../models/Feature";
import { Channel } from "../models/Channel";

export class ManagerCallFactory implements ISubscriptionFactory {
  createSubscription(type: SubscriptionType): ISubscription {
    let subscription;

    switch (type) {
      case SubscriptionType.Domestic:
        subscription = new DomesticSubscription();
        subscription.minimumPeriod = 6; // Longer commitment but with benefits
        subscription.channels.push(
          new Channel(
            "Bonus Channel",
            "Additional local channel included with manager assistance"
          )
        );
        break;
      case SubscriptionType.Educational:
        subscription = new EducationalSubscription();
        subscription.features.push(
          new Feature(
            "Study Materials",
            "Printed educational materials sent to your address"
          )
        );
        break;
      case SubscriptionType.Premium:
        subscription = new PremiumSubscription();
        // Manager-assisted setup but higher monthly fee
        subscription.monthlyFee *= 1.05; // 5% premium for white glove service
        break;
      default:
        throw new Error("Invalid subscription type");
    }

    // Add manager-specific features to all subscriptions
    subscription.features.push(
      new Feature("Dedicated Support", "Direct phone line to customer support")
    );
    subscription.features.push(
      new Feature(
        "Installation Assistance",
        "Free professional installation service"
      )
    );

    console.log(
      "Subscription created through manager call with personalized service"
    );

    return subscription;
  }
}
