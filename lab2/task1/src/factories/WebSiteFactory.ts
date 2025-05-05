import { ISubscriptionFactory } from "./ISubscriptionFactory";
import { DomesticSubscription } from "../subscriptions/DomesticSubscription";
import { EducationalSubscription } from "../subscriptions/EducationalSubscription";
import { PremiumSubscription } from "../subscriptions/PremiumSubscription";
import { SubscriptionType } from "../types/SubscriptionTypes";
import { Feature } from "../models/Feature";

export class WebSiteFactory implements ISubscriptionFactory {
  createSubscription(type: SubscriptionType) {
    let subscription;

    switch (type) {
      case SubscriptionType.Domestic:
        subscription = new DomesticSubscription();
        break;
      case SubscriptionType.Educational:
        subscription = new EducationalSubscription();
        // Website-exclusive educational discount
        subscription.monthlyFee *= 0.9; // 10% discount for educational plan
        break;
      case SubscriptionType.Premium:
        subscription = new PremiumSubscription();
        subscription.features.push(
          new Feature("Multi-profile", "Create up to 5 different user profiles")
        );
        break;
      default:
        throw new Error("Invalid subscription type");
    }

    // Add website-specific features to all subscriptions
    subscription.features.push(
      new Feature(
        "Web Dashboard",
        "Access to exclusive web analytics dashboard"
      )
    );

    console.log("Subscription created through website portal");

    return subscription;
  }
}
