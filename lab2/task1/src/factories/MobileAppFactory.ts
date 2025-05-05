import { ISubscriptionFactory } from "./ISubscriptionFactory";
import { DomesticSubscription } from "../subscriptions/DomesticSubscription";
import { EducationalSubscription } from "../subscriptions/EducationalSubscription";
import { PremiumSubscription } from "../subscriptions/PremiumSubscription";
import { SubscriptionType } from "../types/SubscriptionTypes";
import { Feature } from "../models/Feature";
import { Channel } from "../models/Channel";

export class MobileAppFactory implements ISubscriptionFactory {
  createSubscription(type: SubscriptionType) {
    let subscription;

    switch (type) {
      case SubscriptionType.Domestic:
        subscription = new DomesticSubscription();
        // Mobile app promo for domestic plans
        subscription.monthlyFee *= 0.95; // 5% discount
        break;
      case SubscriptionType.Educational:
        subscription = new EducationalSubscription();
        subscription.channels.push(
          new Channel(
            "Mobile Learning",
            "Educational content optimized for mobile devices"
          )
        );
        break;
      case SubscriptionType.Premium:
        subscription = new PremiumSubscription();
        subscription.features.push(
          new Feature("Mobile HDR", "Enhanced HDR streaming on mobile devices")
        );
        break;
      default:
        throw new Error("Invalid subscription type");
    }

    // Add mobile-specific features to all subscriptions
    subscription.features.push(
      new Feature(
        "Offline Downloads",
        "Download content for offline viewing on mobile"
      )
    );
    subscription.minimumPeriod -= 1; // 1 month shorter minimum commitment on mobile

    console.log("Subscription created through mobile application");

    return subscription;
  }
}
