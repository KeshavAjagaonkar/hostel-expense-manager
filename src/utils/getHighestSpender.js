export const getHighestSpender = (expenses) => {
  // Ignore settlement transactions
  const actualExpenses = expenses.filter(
    (exp) => exp.category !== "Settlement",
  );

  const spentByMember = actualExpenses.reduce((acc, exp) => {
    acc[exp.paidBy] = (acc[exp.paidBy] || 0) + exp.amount;
    return acc;
  }, {});

  // ... rest of the file
  const memberSpent = Object.entries(spentByMember);
  if (memberSpent.length === 0) return null;

  const highestSpender = memberSpent.reduce((a, b) => (a[1] > b[1] ? a : b));
  return {
    id: parseInt(highestSpender[0]),
    spent: highestSpender[1],
  };
};
