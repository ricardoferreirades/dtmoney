import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "./services/api";

export type TransactionType = "deposit" | "withdraw";

interface Transaction {
  id: number;
  title: string;
  category: string;
  amount: number;
  createdAt: Date;
  type: TransactionType;
}

type TransactionInput = Omit<Transaction, "id" | "createdAt">;

interface TransactionProviderProps {
  children: ReactNode;
}

interface TransactionData {
  transactions: Transaction[];
  createTransaction: (transaction: TransactionInput) => void;
}

export const TransactionsConstext = createContext<TransactionData>(
  {} as TransactionData
);

export function TransactionsProvider({ children }: TransactionProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    api
      .get("transactions")
      .then((response) => setTransactions(response.data.transactions));
  }, []);

  function createTransaction(transaction: TransactionInput) {
    api.post("/transactions", transaction);
  }

  return (
    <TransactionsConstext.Provider value={{ transactions, createTransaction }}>
      {children}
    </TransactionsConstext.Provider>
  );
}
