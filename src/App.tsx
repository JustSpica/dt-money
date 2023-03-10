import { ThemeProvider } from "styled-components";

import { TransactionProvider } from "contexts/TransactionsContext";

import { Transactions } from "pages/Transactions";

import { defaultTheme } from "styles/themes/default";
import { GlobalStyle } from "styles/global";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <TransactionProvider>
        <Transactions />
      </TransactionProvider>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
