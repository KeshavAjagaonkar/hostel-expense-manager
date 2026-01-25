import { useState } from "react";
import PageContainer from "../components/Layout/PageContainer.jsx";
import MemberCard from "../components/dashboard/MemberCard.jsx";

import { members } from "../data/member.js";
import { computeBalances } from "../utils/computeBalances.js";
import { useLocalStorage } from "../hooks/useLocalStorage.js";


function getRoomStatus(balances) {
  const unsettledCount = Object.values(balances).filter(
    balance => balance !== 0
  ).length;

  if (unsettledCount === 0) {
    return {
      message: "All expenses are settled for this month.",
      emphasis: false,
    };
  }

  return {
    message: `${unsettledCount} members have pending dues.`,
    emphasis: true,
  };
}

function Dashboard() {
  
  const [expenses, setExpenses] = useLocalStorage("expenses", []);

  
  const balances = computeBalances(members, expenses);
  const roomStatus = getRoomStatus(balances);

  
  const [amount, setAmount] = useState("");
  const [paidBy, setPaidBy] = useState(members[0]);
  const [category, setCategory] = useState("Food");
  const [sharedAmong, setSharedAmong] = useState(
    new Set(members)
  );

  function toggleSharedMember(member) {
    setSharedAmong(prev => {
      const next = new Set(prev);
      next.has(member) ? next.delete(member) : next.add(member);
      return next;
    });
  }

  function handleAddExpense() {
    const amt = parseFloat(amount);

    // Invariants
    if (
      !amt ||
      amt <= 0 ||
      !paidBy ||
      sharedAmong.size === 0 ||
      !sharedAmong.has(paidBy)
    ) {
      return;
    }

    const newExpense = {
      amount: amt,
      paidBy,
      sharedAmong: Array.from(sharedAmong),
      category,
    };

    setExpenses(prev => [...prev, newExpense]);

    // Reset form
    setAmount("");
    setPaidBy(members[0]);
    setCategory("Food");
    setSharedAmong(new Set(members));
  }

  return (
    <PageContainer title="Room Dashboard">
      {/* ===================== */}
      {/* ROOM STATUS SUMMARY  */}
      {/* ===================== */}
      <div
        className={`mb-6 rounded-lg border border-gray-200 px-4 py-3 ${
          roomStatus.emphasis ? "bg-gray-100" : "bg-gray-50"
        }`}
      >
        <p className="text-sm text-gray-800">
          {roomStatus.message}
        </p>
      </div>

      {/* ===================== */}
      {/* TWO-COLUMN LAYOUT     */}
      {/* ===================== */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">

        {/* MEMBERS LIST */}
        <section className="bg-white border border-gray-200 rounded-lg p-6">
          <h2 className="text-lg font-medium tracking-tight text-gray-900 mb-4">
            Members
          </h2>

          <div className="space-y-3">
            {members.map(member => (
              <MemberCard
                key={member}
                name={member}
                balance={balances[member]}
              />
            ))}
          </div>
        </section>

        {/* ADD EXPENSE */}
        <section className="bg-white border border-gray-200 rounded-lg p-6">
          <h2 className="text-lg font-medium tracking-tight text-gray-900">
            Add Expense
          </h2>

          <p className="text-sm text-gray-500 mb-4">
            Add a shared expense and split it among selected members.
          </p>

          <div className="space-y-6">
            {/* Amount */}
            <div>
              <label className="block text-sm text-gray-700 mb-1">
                Amount
              </label>
              <input
                type="number"
                value={amount}
                onChange={e => setAmount(e.target.value)}
                placeholder="Enter amount"
                className="
                  w-full border border-gray-300 rounded-md px-3 py-2
                  text-gray-900
                  focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-gray-400
                "
              />
            </div>

            {/* Paid By */}
            <div>
              <label className="block text-sm text-gray-700 mb-1">
                Paid By
              </label>
              <select
                value={paidBy}
                onChange={e => setPaidBy(e.target.value)}
                className="
                  w-full border border-gray-300 rounded-md px-3 py-2
                  bg-white text-gray-900
                  focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-gray-400
                "
              >
                {members.map(m => (
                  <option key={m}>{m}</option>
                ))}
              </select>
            </div>

            {/* Category */}
            <div>
              <label className="block text-sm text-gray-700 mb-1">
                Category
              </label>
              <select
                value={category}
                onChange={e => setCategory(e.target.value)}
                className="
                  w-full border border-gray-300 rounded-md px-3 py-2
                  bg-white text-gray-900
                  focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-gray-400
                "
              >
                <option>Food</option>
                <option>Utilities</option>
                <option>Travel</option>
                <option>Other</option>
              </select>
            </div>

            {/* Shared Among */}
            <div>
              <label className="block text-sm text-gray-700 mb-2">
                Shared Among
              </label>

              <div className="grid grid-cols-2 gap-y-2 gap-x-4">
                {members.map(m => (
                  <label
                    key={m}
                    className="flex items-center gap-2 text-sm text-gray-800 cursor-pointer hover:text-gray-900"
                  >
                    <input
                      type="checkbox"
                      checked={sharedAmong.has(m)}
                      onChange={() => toggleSharedMember(m)}
                      className="accent-black"
                    />
                    {m}
                  </label>
                ))}
              </div>
            </div>

            {/* Button */}
            <button
              onClick={handleAddExpense}
              className="
                w-full bg-black text-white text-sm font-medium py-2 rounded-md
                hover:bg-gray-800 active:scale-[0.98]
                transition-transform
              "
            >
              Add Expense
            </button>
          </div>
        </section>

      </div>
    </PageContainer>
  );
}

export default Dashboard;
