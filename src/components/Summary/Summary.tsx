import { useContext } from 'react'

import { Container } from "./styles";
import { income, outcome, total } from '../../assets/directory'
import { TransactionsContext } from '../../TransactionsContext';

export default function Summary() {
  const data = useContext(TransactionsContext)

  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={income} alt="Entradas" />
        </header>
        <strong>R$12.000,00</strong>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <img src={outcome} alt="Saídas" />
        </header>
        <strong> - R$5.000,00</strong>
      </div>
      <div className="highlight-background">
        <header>
          <p>Total</p>
          <img src={total} alt="Total" />
        </header>
        <strong>R$7.000,00</strong>
      </div>
    </Container>
  )
}
