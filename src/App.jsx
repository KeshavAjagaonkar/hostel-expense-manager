import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Nav from "./components/Layout/Nav.jsx";

import Dashboard from "./pages/Dashboard.jsx";
import Summary from "./pages/Summary.jsx";
import Settlements from "./pages/Settlements.jsx";

import { members } from "./data/member.js";
import { computeBalances } from "./utils/computeBalances.js";


function App() {
  // 1. Source of truth: expenses
  const [expenses, setExpenses] = useLocalStorage("expenses", []);

  // 2. Simulated identity
  const [activeUser, setActiveUser] = useState(members[0]);

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
      <BrowserRouter>
        {/* Persistent navigation */}
        <Nav />

        {/* Route-level views */}
        <Routes>
          <Route
            path="/"
            element={
              <Dashboard
                members={members}
                expenses={expenses}
                setExpenses={setExpenses}
                balances={balances}
              />
            }
          />

          <Route
            path="/summary"
            element={
              <Summary
                expenses={expenses}
                balances={balances}
              />
            }
          />

          <Route
            path="/settlements"
            element={
              <Settlements
                balances={balances}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;