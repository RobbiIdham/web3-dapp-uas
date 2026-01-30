import { useEffect, useState } from "react";

function TransactionList() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/transactions")
      .then(res => res.json())
      .then(data => setTransactions(data.data));
  }, []);

  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <h2 className="font-bold mb-4">Transactions</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {transactions.map(tx => (
          <div key={tx.id} className="border p-3 rounded">
            <p>{tx.from} → {tx.to}</p>
            <p>{tx.amount}</p>
            <p className="text-xs text-gray-500">{tx.timestamp}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TransactionList;
