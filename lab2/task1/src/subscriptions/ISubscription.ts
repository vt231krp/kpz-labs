import { Channel } from "../models/Channel";
import { Feature } from "../models/Feature";

export interface ISubscription {
  monthlyFee: number;
  minimumPeriod: number; // in months
  getChannels(): Channel[];
  getFeatures(): Feature[];
}
