// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { WalletBalance } = initSchema(schema);

export {
  WalletBalance
};