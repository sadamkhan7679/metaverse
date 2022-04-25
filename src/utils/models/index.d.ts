import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type WalletBalanceMetaData = {
  readOnlyFields: 'updatedAt';
}

export declare class WalletBalance {
  readonly id: string;
  readonly wallet: string;
  readonly balance: number;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<WalletBalance, WalletBalanceMetaData>);
  static copyOf(source: WalletBalance, mutator: (draft: MutableModel<WalletBalance, WalletBalanceMetaData>) => MutableModel<WalletBalance, WalletBalanceMetaData> | void): WalletBalance;
}