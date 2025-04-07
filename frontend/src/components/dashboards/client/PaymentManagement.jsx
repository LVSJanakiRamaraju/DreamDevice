import { useState } from "react";

const PaymentManagement = () => {
  const [payments, setPayments] = useState([
    {
      id: 1,
      expert: "John Doe",
      amount: 1200,
      status: "Paid",
      date: "2025-04-01",
    },
    {
      id: 2,
      expert: "Jane Smith",
      amount: 1100,
      status: "Pending",
      date: "2025-04-05",
    },
  ]);

  const markAsPaid = (id) => {
    setPayments((prev) =>
      prev.map((p) => (p.id === id ? { ...p, status: "Paid" } : p))
    );
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Payment Management</h2>
      <ul className="space-y-4">
        {payments.map((payment) => (
          <li
            key={payment.id}
            className="border p-4 rounded shadow bg-white flex justify-between items-center"
          >
            <div>
              <p><strong>Expert:</strong> {payment.expert}</p>
              <p><strong>Amount:</strong> ${payment.amount}</p>
              <p><strong>Date:</strong> {payment.date}</p>
              <p><strong>Status:</strong> {payment.status}</p>
            </div>
            {payment.status === "Pending" && (
              <button
                onClick={() => markAsPaid(payment.id)}
                className="bg-green-600 text-white px-4 py-2 rounded"
              >
                Mark as Paid
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PaymentManagement;
