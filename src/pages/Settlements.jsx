// src/pages/Settlements.jsx
import PageContainer from "../components/Layout/PageContainer";
import { computeSettlements } from "../utils/computeSettlements";
import { members } from "../data/member";

function Settlements({ balances, setExpenses }) {
  // Accept setExpenses prop
  const settlements = computeSettlements(balances);

  // Create a quick lookup map for names
  const memberMap = members.reduce((map, m) => {
    map[m.id] = m.name;
    return map;
  }, {});

  const handleSettle = (fromId, toId, amount) => {
    // Confirm before settling (optional, but good UX)
    if (
      !window.confirm(
        `Confirm settlement of ₹${amount} from ${memberMap[fromId]} to ${memberMap[toId]}?`,
      )
    ) {
      return;
    }

    const settlementTransaction = {
      id: Date.now(),
      amount: Number(amount), // Ensure it's a number
      category: "Settlement", // Special category we can filter later
      paidBy: Number(fromId), // The person paying (Debtor)
      sharedAmong: [Number(toId)], // The person receiving (Creditor)
      description: `Settlement to ${memberMap[toId]}`,
      date: new Date().toISOString().split("T")[0],
      type: "settlement", // Optional flag for easier filtering
    };

    // Update state
    setExpenses((prev) => [...prev, settlementTransaction]);
  };

  return (
    <PageContainer title="Settlements">
      <div className="max-w-2xl mx-auto">
        <section className="bg-white border border-gray-200 rounded-lg p-6">
          <h2 className="text-lg font-medium text-gray-900 mb-4">
            Recommended Transactions
          </h2>

          {settlements.length === 0 ? (
            <p className="text-gray-500 text-center py-4">All settled up!</p>
          ) : (
            <div className="space-y-3">
              {settlements.map((tx, index) => (
                <div
                  key={index}
                  className="flex flex-col sm:flex-row justify-between items-center border border-gray-200 rounded-md p-3 gap-3"
                >
                  <div className="flex items-center gap-2 text-gray-900">
                    <span className="font-semibold">{memberMap[tx.from]}</span>
                    <span className="text-sm text-gray-500">pays</span>
                    <span className="font-semibold">{memberMap[tx.to]}</span>
                  </div>

                  <div className="flex items-center gap-4 w-full sm:w-auto justify-between sm:justify-end">
                    <span className="font-bold text-gray-900">
                      ₹{tx.amount.toFixed(2)}
                    </span>

                    {/* Button Logic Added Here */}
                    <button
                      onClick={() => handleSettle(tx.from, tx.to, tx.amount)}
                      className="bg-black text-white text-xs font-medium px-3 py-1.5 rounded hover:bg-gray-800 transition"
                    >
                      Settle
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      </div>
    </PageContainer>
  );
}

export default Settlements;
