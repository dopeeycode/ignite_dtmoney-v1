import { createContext, useEffect, useState } from 'react'
import { dataNewTransaction } from './@types/dbNewTransaction';
import { api } from './services/api';

// Types
import { TransactionsProviderProps } from './@types/TransactionsProviderProps';

export const TransactionsContext = createContext<dataNewTransaction[]>([]);

export default function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<dataNewTransaction[]>([])
  useEffect(() => {
    api.get('transactions').then(response => {
      setTransactions(response.data.transactions)
    })
  }, [])

  return (
    <TransactionsContext.Provider value={transactions}>
      {children}
    </TransactionsContext.Provider>
  );
}