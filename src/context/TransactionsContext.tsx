import { createContext, useEffect, useState } from 'react'
import { api } from '../services/api';

// Types
import { TransactionsProviderProps } from '../@types/TransactionsProviderProps';
import { TransactionsInput } from '../@types/TransactionsInput';
import { TransactionsContextData } from '../@types/TransactionsContextData';
import { dataNewTransaction } from '../@types/dbNewTransaction';


export const TransactionsContext = createContext<TransactionsContextData>(
  {} as TransactionsContextData
);

export default function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<dataNewTransaction[]>([])
  useEffect(() => {
    api.get('transactions').then(response => {
      setTransactions(response.data.transactions)
    })
  }, []);

  async function createTransaction(transactionInput: TransactionsInput){
    const response = await api.post('transactions', {
      ...transactionInput,
      createdAt: new Date()
    })
    const { transaction } = response.data;

    setTransactions([
      ...transactions,
      transaction 
    ])
  }

  return (
    <TransactionsContext.Provider value={{ transactions, createTransaction }}>
      {children}
    </TransactionsContext.Provider>
  );
}