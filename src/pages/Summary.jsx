import { members } from "../data/member";
import { computeBalances } from "../utils/computeBalances";
import totalExpenses_Balance from "../utils/totalExpenses_Balance";
import BarChartComponent from "../components/_SummaryComponents/BarChart";
import PieComponent from "../components/_SummaryComponents/PieComponent";
import { getHighestSpender } from "../utils/getHighestSpender";
import { getCategoryData } from "../utils/getCategoryData";
import { getMemberName } from "../utils/getMemberName";
import { SummaryCard } from "../components/_SummaryComponents/SummaryCard";
import { ChartSection } from "../components/_SummaryComponents/ChartSection";
import { BalanceCard } from "../components/_SummaryComponents/BalanceCard";
import { EmptyState } from "../components/_SummaryComponents/EmptyState";
const Summary = ({ expenses, balances }) => {
  console.log("Props received:", { expenses, balances });

  if (!expenses || expenses.length === 0) {
    return <EmptyState />;
  }

  const computedBalances = computeBalances(members, expenses);
  const balancesToUse =
    Object.keys(computedBalances || {}).length > 0
      ? computedBalances
      : balances || {};

  const { totalExpenses, totalBalance } = totalExpenses_Balance(
    expenses,
    balancesToUse,
  );
  const highestSpender = getHighestSpender(expenses);
  const categoryData = getCategoryData(expenses);

  const barChartData = Object.entries(categoryData).map(([name, value]) => ({
    name,
    value: parseFloat(value.toFixed(2)),
  }));

  const pieChartData = Object.entries(balancesToUse)
    .map(([memberId, balance]) => ({
      name: getMemberName(parseInt(memberId)),
      value: Math.abs(parseFloat((balance / 100).toFixed(2))),
      rawBalance: balance,
    }))
    .filter((item) => item.value > 0);

  return (
    <div className="min-h-screen bg-white text-black p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-black">Expense Summary</h1>
          <p className="text-gray-600 mt-2">
            Complete overview of all expenses and balances
          </p>
        </header>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <SummaryCard
            title="Total Expenses"
            value={`₹${totalExpenses.toFixed(2)}`}
            subtitle="Across all categories"
          />
          <SummaryCard
            title="Outstanding Balance"
            value={`₹${(totalBalance / 100).toFixed(2)}`}
            subtitle="Total amount to settle"
          />
          <SummaryCard
            title="Highest Spender"
            value={highestSpender ? getMemberName(highestSpender.id) : "N/A"}
            subtitle={
              highestSpender ? `Spent ₹${highestSpender.spent.toFixed(2)}` : ""
            }
          />
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <ChartSection title="Expenses by Category">
            <BarChartComponent data={barChartData} />
            {barChartData.length === 0 && (
              <div className="text-center py-8">
                <p className="text-gray-500">No category data available</p>
              </div>
            )}
          </ChartSection>

          <ChartSection title="Balances Distribution">
            <PieComponent data={pieChartData} />
            {pieChartData.length === 0 && (
              <div className="flex items-center justify-center h-full">
                <p className="text-gray-500">All balances are settled!</p>
              </div>
            )}
          </ChartSection>
        </div>

        {/* Quick Balances */}
        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
          <h2 className="text-xl font-bold text-black mb-6 pb-2 border-b border-gray-200">
            Quick Balances
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {members.map((member) => (
              <BalanceCard
                key={member.id}
                member={member}
                balance={balancesToUse[member.id] || 0}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;
