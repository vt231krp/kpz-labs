import { ISubscription } from "../subscriptions/ISubscription";
import { SubscriptionType } from "../types/SubscriptionTypes";

export interface ISubscriptionFactory {
  createSubscription(type: SubscriptionType): ISubscription;
}
