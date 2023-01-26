import { Header, Summary } from "components";

import { useTransactions } from "contexts/TransactionsContext";

import { dateFormatter, priceFormatter } from "util/formatter";

import { SearchForm } from "./components/SearchForm";

import {
  PriceHighLight,
  TransactionsContainer,
  TransactionsTable,
} from "./styles";

export function Transactions() {
  const { transactions } = useTransactions();

  return (
    <div>
      <Header />
      <Summary />

      <TransactionsContainer>
        <SearchForm />
        <TransactionsTable>
          <tbody>
            {transactions.map(transaction => (
              <tr key={transaction.id}>
                <td>{transaction.description}</td>
                <PriceHighLight variant={transaction.type}>
                  {priceFormatter.format(transaction.price)}
                </PriceHighLight>
                <td>{transaction.category}</td>
                <td>{dateFormatter.format(new Date(transaction.createdAt))}</td>
              </tr>
            ))}
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  );
}
