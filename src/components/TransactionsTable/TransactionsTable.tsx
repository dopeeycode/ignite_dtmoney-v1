import { useEffect } from "react";
import { Container } from "./styles";

export default function TransactionsTable() {
  useEffect(() => {
    fetch('http://localhost:5173/api/transactions').then(response => response.json())
    .then(data => console.log(data))
  })

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
