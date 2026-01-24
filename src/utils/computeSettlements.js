/**
 * Computes settlement instructions from net balances.
 *
 * @param {Object} balances - Net balances per member
 * @returns {Array} settlements - Who pays whom and how much
 */
export function computeSettlements(balances) {
  const settlements = [];

  // Create working copies (DO NOT mutate original balances)
  const creditors = [];
  const debtors = [];

  Object.entries(balances).forEach(([member, balance]) => {
    if (balance > 0) {
      creditors.push({ member, amount: balance });
    } else if (balance < 0) {
      debtors.push({ member, amount: -balance });
    }
  });

  let i = 0; // debtor index
  let j = 0; // creditor index

  while (i < debtors.length && j < creditors.length) {
    const debtor = debtors[i];
    const creditor = creditors[j];

    const settleAmount = Math.min(debtor.amount, creditor.amount);

    settlements.push({
      from: debtor.member,
      to: creditor.member,
      amount: settleAmount
    });

    debtor.amount -= settleAmount;
    creditor.amount -= settleAmount;

    if (debtor.amount === 0) i++;
    if (creditor.amount === 0) j++;
  }

  return settlements;
}
