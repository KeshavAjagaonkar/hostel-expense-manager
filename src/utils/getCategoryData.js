// src/utils/getCategoryData.js
export const getCategoryData = (expenses) => {
  // Ignore settlement transactions
  const actualExpenses = expenses.filter(
    (exp) => exp.category !== "Settlement",
  );

  return actualExpenses.reduce((acc, expense) => {
    // Corrected the variable name below from 'constYZcategory' to 'const category'
    const category = expense.category || "Other";
    acc[category] = (acc[category] || 0) + expense.amount;
    return acc;
  }, {});
};
