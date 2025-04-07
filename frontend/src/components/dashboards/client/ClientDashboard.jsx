import { useState } from "react";
import Overview from "./Overview";
import RequestManagement from "./RequestManagement";
import ExpertInteraction from "./ExpertInteraction";
import ProjectTracking from "./ProjectTracking";
import ReviewsRatings from "./ReviewsRatings";
import PaymentManagement from "./PaymentManagement";
import ProfileManagement from "./ProfileManagement";

const ClientDashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const renderTab = () => {
    switch (activeTab) {
      case "overview":
        return <Overview />;
      case "requests":
        return <RequestManagement />;
      case "experts":
        return <ExpertInteraction />;
      case "projects":
        return <ProjectTracking />;
      case "reviews":
        return <ReviewsRatings />;
      case "payments":
        return <PaymentManagement />;
      case "profile":
        return <ProfileManagement />;
      default:
        return <Overview />;
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Client Dashboard</h1>
      <div className="flex space-x-4 mb-4 overflow-x-auto">
        {[
          { label: "Overview", value: "overview" },
          { label: "Requests", value: "requests" },
          { label: "Experts", value: "experts" },
          { label: "Projects", value: "projects" },
          { label: "Reviews", value: "reviews" },
          { label: "Payments", value: "payments" },
          { label: "Profile", value: "profile" },
        ].map((tab) => (
          <button
            key={tab.value}
            onClick={() => setActiveTab(tab.value)}
            className={`px-4 py-2 rounded-full ${
              activeTab === tab.value
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-800"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="border rounded p-4 bg-white shadow">{renderTab()}</div>
    </div>
  );
};

export default ClientDashboard;
