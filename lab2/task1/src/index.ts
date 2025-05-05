import { WebSiteFactory } from "./factories/WebSiteFactory";
import { MobileAppFactory } from "./factories/MobileAppFactory";
import { ManagerCallFactory } from "./factories/ManagerCallFactory";
import { SubscriptionType } from "./types/SubscriptionTypes";

function main() {
  const webSiteFactory = new WebSiteFactory();
  const mobileAppFactory = new MobileAppFactory();
  const managerCallFactory = new ManagerCallFactory();

  const domesticSubscription = webSiteFactory.createSubscription(
    SubscriptionType.Domestic
  );
  const educationalSubscription = mobileAppFactory.createSubscription(
    SubscriptionType.Educational
  );
  const premiumSubscription = managerCallFactory.createSubscription(
    SubscriptionType.Premium
  );

  console.log("Domestic Subscription:", domesticSubscription);
  console.log("Educational Subscription:", educationalSubscription);
  console.log("Premium Subscription:", premiumSubscription);
}

main();
