/**
 * Computes net balances for each member based on expense history.
 *
 * @param {string[]} members - List of all room members
 * @param {Array} expenses - List of expense events
 * @returns {Object} balances - Net balance per member
 */
export function computeBalances(members, expenses) {
  const balances = {};

  // 1. Initialize all members with 0 balance
  members.forEach(member => {
    balances[member] = 0;
  });

  // 2. Process each expense
  expenses.forEach(expense => {
    const { amount, paidBy, sharedAmong } = expense;

    // Defensive check (not mandatory, but safe)
    if (!sharedAmong || sharedAmong.length === 0) return;

    const share = amount / sharedAmong.length;

    // 3. Each shared member owes their share
    sharedAmong.forEach(member => {
      balances[member] -= share;
    });

    // 4. Payer gets credited full amount
    balances[paidBy] += amount;
  });

  return balances;
}
