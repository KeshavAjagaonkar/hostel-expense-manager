import PageContainer from "../components/Layout/PageContainer";

function Settlements() {
  // Static data just for layout visualization
  const dummySettlements = [
    { from: "Keshav", to: "Aditya", amount: 500 },
    { from: "Rahul", to: "Aditya", amount: 120 },
  ];

  return (
    <PageContainer title="Settlements">
      <div className="max-w-2xl mx-auto">
        <section className="bg-white border border-gray-200 rounded-lg p-6">
          <h2 className="text-lg font-medium text-gray-900 mb-4">
            Recommended Transactions
          </h2>

          <div className="space-y-3">
            {dummySettlements.map((tx, index) => (
              <div
                key={index}
                className="flex flex-col sm:flex-row justify-between items-center border border-gray-200 rounded-md p-3 gap-3"
              >
                {/* Text Details */}
                <div className="flex items-center gap-2 text-gray-900">
                  <span className="font-semibold">{tx.from}</span>
                  <span className="text-sm text-gray-500">pays</span>
                  <span className="font-semibold">{tx.to}</span>
                </div>

                {/* Amount and Button */}
                <div className="flex items-center gap-4 w-full sm:w-auto justify-between sm:justify-end">
                  <span className="font-bold text-gray-900">₹{tx.amount}</span>

                  <button className="bg-black text-white text-xs font-medium px-3 py-1.5 rounded hover:bg-gray-800 transition">
                    Settle
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </PageContainer>
  );
}

export default Settlements;
