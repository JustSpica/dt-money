import { Header, Summary } from "components";

import {
  PriceHighLight,
  TransactionsContainer,
  TransactionsTable,
} from "./styles";

export function Transactions() {
  return (
    <div>
      <Header />
      <Summary />

      <TransactionsContainer>
        <TransactionsTable>
          <tbody>
            <tr>
              <td>Desenvolvimento de site</td>
              <PriceHighLight variant="income">R$ 12.000,00</PriceHighLight>
              <td>Venda</td>
              <td>13/01/2023</td>
            </tr>
            <tr>
              <td>Hamburguer</td>
              <PriceHighLight variant="outcome">- R$ 59,00</PriceHighLight>
              <td>Alimentação</td>
              <td>13/01/2023</td>
            </tr>
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  );
}
