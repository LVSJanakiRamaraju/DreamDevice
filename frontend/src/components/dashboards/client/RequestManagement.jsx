import { useState, useEffect } from "react";

const RequestManagement = () => {
  const [requests, setRequests] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setRequests([
        { id: 1, title: "Gaming Phone", status: "pending" },
        { id: 2, title: "Budget Phone", status: "in progress" },
        { id: 3, title: "Photography Phone", status: "completed" },
      ]);
    }, 500);
  }, []);

  const filteredRequests = requests.filter((req) =>
    req.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">Your Requests</h2>

      <div className="mb-4">
        <input
          type="text"
          placeholder="Search requests..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="p-2 border border-gray-300 rounded w-full"
        />
      </div>

      <ul className="space-y-3">
        {filteredRequests.map((request) => (
          <li
            key={request.id}
            className="border p-4 rounded bg-gray-100 shadow"
          >
            <p className="font-semibold">{request.title}</p>
            <p className="text-sm text-gray-600">Status: {request.status}</p>
          </li>
        ))}
      </ul>

      <div className="mt-6">
        <button className="bg-blue-600 text-white px-4 py-2 rounded shadow">
          + Create New Request
        </button>
      </div>
    </div>
  );
};

export default RequestManagement;