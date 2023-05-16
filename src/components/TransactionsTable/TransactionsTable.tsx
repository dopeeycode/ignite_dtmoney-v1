import { useEffect, useState } from "react";
import { Container } from "./styles";
import { api } from "../../services/api";
import { dataNewTransaction } from "../../@types/dbNewTransaction";

// Types

export default function TransactionsTable() {
  const [transactions, setTransactions] = useState<dataNewTransaction[]>([])

  useEffect(() => {
    api.get('transactions').then(response => {
      setTransactions(response.data.transactions)
    })
  }, [])

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map(transaction => (
            <tr key={transaction.id}>
              <td>{transaction.title}</td>
              {transaction.type === 'withdraw' && (
                <td className={transaction.type}> 
                  - {new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                  }).format(transaction.amount)}
                </td>
              )}
              {transaction.type === 'deposit' && (
                <td className={transaction.type}>
                  {new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                  }).format(transaction.amount)}
                </td>
              )}
              <td>{transaction.category}</td>
              <td>
                {new Intl.DateTimeFormat('pt-BR').format(
                  new Date(transaction.createdAt)
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  )
}
