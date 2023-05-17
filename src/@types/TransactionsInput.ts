import { dataNewTransaction } from './dbNewTransaction';

export type TransactionsInput = Omit<dataNewTransaction, 'id' | 'createdAt'>;