import { useState } from "react";

const ExpertInteraction = () => {
  const [proposals, setProposals] = useState([
    {
      id: 1,
      expertName: "John Doe",
      offerDetails: "Can build the device with your specifications in 3 weeks",
      cost: 1200,
      status: "pending",
    },
    {
      id: 2,
      expertName: "Jane Smith",
      offerDetails: "Experienced in similar projects, ready in 4 weeks",
      cost: 1100,
      status: "pending",
    },
  ]);

  const handleResponse = (id, response) => {
    setProposals((prev) =>
      prev.map((p) =>
        p.id === id ? { ...p, status: response } : p
      )
    );
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Expert Interaction</h2>
      {proposals.map((proposal) => (
        <div
          key={proposal.id}
          className="border p-4 mb-4 rounded shadow bg-gray-50"
        >
          <p><strong>Expert:</strong> {proposal.expertName}</p>
          <p><strong>Proposal:</strong> {proposal.offerDetails}</p>
          <p><strong>Cost:</strong> ${proposal.cost}</p>
          <p><strong>Status:</strong> {proposal.status}</p>
          {proposal.status === "pending" && (
            <div className="mt-2 space-x-2">
              <button
                onClick={() => handleResponse(proposal.id, "accepted")}
                className="bg-green-600 text-white px-3 py-1 rounded"
              >
                Accept
              </button>
              <button
                onClick={() => handleResponse(proposal.id, "declined")}
                className="bg-red-500 text-white px-3 py-1 rounded"
              >
                Decline
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ExpertInteraction;
