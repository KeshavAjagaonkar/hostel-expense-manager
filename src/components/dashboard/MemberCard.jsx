function formatRupees(paise) {
  return (Math.abs(paise) / 100).toFixed(2);
}

function MemberCard({ name, balance }) {
  const isOwed = balance > 0;
  const owes = balance < 0;
  const settled = balance === 0;

  let statusLabel = "Settled";
  let amountLabel = "";
  let containerClasses =
    "border border-gray-200";
  let amountClasses =
    "text-gray-700";
  let nameClasses =
    "text-gray-900";

  if (owes) {
    statusLabel = "owes";
    amountLabel = `₹${formatRupees(balance)}`;
    containerClasses =
      "border-l-4 border-l-gray-900 border border-gray-200";
    amountClasses =
      "text-gray-900 font-medium";
  }

  if (isOwed) {
    statusLabel = "is owed";
    amountLabel = `₹${formatRupees(balance)}`;
    amountClasses =
      "text-gray-900";
  }

  if (settled) {
    nameClasses =
      "text-gray-500";
    amountClasses =
      "text-gray-400";
  }

  return (
    <div
      className={`bg-white rounded-lg p-4  hover:bg-gray-50 transition-colors duration-150 ${containerClasses}`}
    >
      <div className="flex justify-between items-center">
        <span className={`text-sm font-medium ${nameClasses}`}>
          {name}
        </span>

        <span className={`text-sm ${amountClasses}`}>
          {statusLabel}
          {amountLabel && ` ${amountLabel}`}
        </span>
      </div>
    </div>
  );
}

export default MemberCard;
