import React, { createContext, useContext, useEffect, useState } from "react";

import { api } from "lib/axios";

interface Transaction {
  id: number;
  description: string;
  type: "income" | "outcome";
  category: string;
  price: number;
  createdAt: string;
}

interface NewTransactionType extends Omit<Transaction, "id" | "createdAt"> {
  createdAt: Date;
}

interface TransactionContextType {
  transactions: Transaction[];
  fetchTransactions: (query?: string) => void;
  createNewTransaction: (body: NewTransactionType) => void;
}

interface TransactionProviderProps {
  children: React.ReactNode;
}

const TransactionContext = createContext({} as TransactionContextType);

export function TransactionProvider({ children }: TransactionProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  async function fetchTransactions(query?: string) {
    try {
      const response = await api.get<Transaction[]>("/transactions", {
        params: {
          _sort: "createdAt",
          _order: "desc",
          q: query,
        },
      });

      setTransactions(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function createNewTransaction(body: NewTransactionType) {
    try {
      const response = await api.post("/transactions", body);

      setTransactions(prevState => [response.data, ...prevState]);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchTransactions();
  }, []);

  return (
    <TransactionContext.Provider
      value={{ createNewTransaction, fetchTransactions, transactions }}
    >
      {children}
    </TransactionContext.Provider>
  );
}

export function useTransactions() {
  const context = useContext(TransactionContext);

  if (!context) {
    throw new Error(
      "useTransactions must be used inside of TransactionProvider component",
    );
  }

  return context;
}
