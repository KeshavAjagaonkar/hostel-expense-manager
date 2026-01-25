import PageContainer from "../components/Layout/PageContainer.jsx";

function Dashboard() {
  return (
    <PageContainer title="Room Dashboard">
      {/* Two-column layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">

        {/* ===================== */}
        {/* USER LIST CONTAINER   */}
        {/* ===================== */}
        <section className="bg-white border border-gray-200 rounded-lg p-6">
          <h2 className="text-lg font-medium text-gray-900 mb-4">
            Members
          </h2>

          <div className="space-y-3">
            <div className="flex justify-between items-center border border-gray-200 rounded-md p-3">
              <span className="text-gray-900">Rahul</span>
              <span className="text-sm text-gray-600">owes ₹46.34</span>
            </div>

            <div className="flex justify-between items-center border border-gray-200 rounded-md p-3">
              <span className="text-gray-900">Amit</span>
              <span className="text-sm text-gray-600">is owed ₹69.50</span>
            </div>

            <div className="flex justify-between items-center border border-gray-200 rounded-md p-3">
              <span className="text-gray-900">Neha</span>
              <span className="text-sm text-gray-500">settled</span>
            </div>
          </div>
        </section>

        {/* ===================== */}
        {/* ADD EXPENSE CONTAINER */}
        {/* ===================== */}
        <section className="bg-white border border-gray-200 rounded-lg p-6">
          <h2 className="text-lg font-medium text-gray-900 mb-6">
            Add Expense
          </h2>

          <div className="space-y-5">

            {/* Amount */}
            <div>
              <label className="block text-sm text-gray-700 mb-1">
                Amount
              </label>
              <input
                type="number"
                placeholder="Enter amount"
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-400"
              />
            </div>

            {/* Paid By */}
            <div>
              <label className="block text-sm text-gray-700 mb-1">
                Paid By
              </label>
              <select className="w-full border border-gray-300 rounded-md px-3 py-2 bg-white text-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-400">
                <option>Rahul</option>
                <option>Amit</option>
                <option>Neha</option>
                <option>Sita</option>
              </select>
            </div>

            {/* Category */}
            <div>
              <label className="block text-sm text-gray-700 mb-1">
                Category
              </label>
              <select className="w-full border border-gray-300 rounded-md px-3 py-2 bg-white text-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-400">
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

              <div className="grid grid-cols-2 gap-3">
                <label className="flex items-center gap-2 text-sm text-gray-800">
                  <input type="checkbox" className="accent-black" />
                  Rahul
                </label>
                <label className="flex items-center gap-2 text-sm text-gray-800">
                  <input type="checkbox" className="accent-black" />
                  Amit
                </label>
                <label className="flex items-center gap-2 text-sm text-gray-800">
                  <input type="checkbox" className="accent-black" />
                  Neha
                </label>
                <label className="flex items-center gap-2 text-sm text-gray-800">
                  <input type="checkbox" className="accent-black" />
                  Sita
                </label>
              </div>
            </div>

            {/* Button */}
            <button className="w-full bg-black text-white text-sm font-medium py-2 rounded-md hover:bg-gray-800 transition">
              Add Expense
            </button>

          </div>
        </section>

      </div>
    </PageContainer>
  );
}

export default Dashboard;
