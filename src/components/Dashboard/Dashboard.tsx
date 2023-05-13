import Summary from "../Summary/Summary";
import TransactionsTable from "../TransactionsTable/TransactionsTable";
import { Container } from "./styles";

export default function Dashboard() {
  return (
    <Container>
      <Summary/>
      <TransactionsTable />
    </Container>
  )
}
