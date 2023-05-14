import { useEffect, useState } from "react";
import { Container } from "./styles";
import { api } from "../../services/api";

// Types

export default function TransactionsTable() {
  const [data, setData] = useState([])

  useEffect(() => {
    api.get('transactions').then(response => {
      setData(response.data)
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
          <tr>
            <td>Desenvolvimento de website</td>
            <td className="deposit">$12.000,00</td>
            <td>Desenvolvimento</td>
            <td>13/05/2023</td>
          </tr>
          <tr>
            <td>Computador</td>
            <td className="withdraw"> - $5.000,00</td>
            <td>Acessórios</td>
            <td>10/05/2023</td>
          </tr>
        </tbody>
      </table>
    </Container>
  )
}
