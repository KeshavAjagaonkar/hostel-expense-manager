const totalExpenses_Balance = (expenses, balances) => {
  // Filter out settlements so they don't count as spending
  const actualExpenses = expenses.filter(
    (exp) => exp.category !== "Settlement",
  );

  const totalExpenses = actualExpenses.reduce(
    (sum, expense) => sum + expense.amount,
    0,
  );

  const totalBalance = Object.values(balances).reduce(
    (sum, balance) => sum + Math.abs(balance),
    0,
  );

  return { totalExpenses, totalBalance };
};

export default totalExpenses_Balance;
