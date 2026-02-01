import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useMemo } from "react";
import Nav from "./components/Layout/Nav.jsx";

import Dashboard from "./pages/Dashboard.jsx";
import Summary from "./pages/Summary.jsx";
import Settlements from "./pages/Settlements.jsx";

import { members } from "./data/member.js";
import { computeBalances } from "./utils/computeBalances.js";
import { useLocalStorage } from "./hooks/useLocalStorage.js";
import Home from "./pages/Home.jsx";

function App() {
  // 1. Source of truth: expenses
  const [expenses, setExpenses] = useLocalStorage("expenses", []);

  // 3. Derived data: balances (NOT stored)
  const balances = useMemo(() => {
    return computeBalances(members, expenses);
  }, [expenses]);

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
              <Home />
            }
          />
          <Route
            path="/dashboard"
            element={
              <Dashboard setExpenses={setExpenses} balances={balances} />
            }
          />

          <Route
            path="/summary"
            element={<Summary expenses={expenses} balances={balances} />}
          />

          <Route
            path="/settlements"
            element={
              <Settlements balances={balances} setExpenses={setExpenses} />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
