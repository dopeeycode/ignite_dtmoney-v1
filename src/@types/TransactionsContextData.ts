import { TransactionsInput } from "./TransactionsInput";
import { dataNewTransaction } from "./dbNewTransaction";

export interface TransactionsContextData {
  transactions: dataNewTransaction[];
  createTransaction: (transaction: TransactionsInput) => Promise<void>;
}