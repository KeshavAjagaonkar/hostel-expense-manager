import { useState, useMemo } from "react";
import { members } from "./data/member";
import { computeBalances } from "./utils/computeBalances";
import { useLocalStorage } from "./hooks/useLocalStorage";

import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import AddExpense from "./components/AddExpense";
import Summary from "./components/Summary";

function App() {
  // 1. Source of truth: expenses
  const [expenses, setExpenses] = useLocalStorage("expenses", []);

  // 2. Simulated identity
  const [activeUser, setActiveUser] = useState(members[3]);

  // 3. Derived data: balances (NOT stored)
  const balances = useMemo(() => {
    return computeBalances(members, expenses);
  }, [expenses]);

  // 4. Add expense handler
  function handleAddExpense(expense) {
    setExpenses(prev => [...prev, expense]);
  }

  return (
    <>
      <Header
        members={members}
        activeUser={activeUser}
        onChangeUser={setActiveUser}
      />

      <Dashboard
        balances={balances}
        expenses={expenses}
      />

      <AddExpense
        members={members}
        activeUser={activeUser}
        onAddExpense={handleAddExpense}
      />

      <Summary
        expenses={expenses}
        balances={balances}
      />
    </>
  );
}

export default App;
