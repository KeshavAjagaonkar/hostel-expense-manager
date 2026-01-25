import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Nav from "./components/Layout/Nav.jsx";

import Dashboard from "./pages/Dashboard.jsx";
import Summary from "./pages/Summary.jsx";
import Settlements from "./pages/Settlements.jsx";

import { members } from "./data/member.js";
import { computeBalances } from "./utils/computeBalances.js";


function App() {
  const [expenses, setExpenses] = useState([]);
   const balances = computeBalances(members, expenses);
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