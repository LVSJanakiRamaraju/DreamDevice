import { useEffect, useState } from "react";

const Overview = () => {
  const [stats, setStats] = useState({
    activeRequests: 0,
    ongoingProjects: 0,
    completedDevices: 0,
  });

  const [notifications, setNotifications] = useState([
    // Sample static data, replace with API later
    { id: 1, message: "Your request #123 has been accepted by ExpertX", time: "2 hours ago" },
    { id: 2, message: "Project #456 reached milestone 2", time: "1 day ago" },
  ]);

  useEffect(() => {
    // Simulate fetching stats
    setTimeout(() => {
      setStats({
        activeRequests: 2,
        ongoingProjects: 1,
        completedDevices: 3,
      });
    }, 1000);
  }, []);

  return (
    <div className="space-y-6">
      {/* Summary Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {[
          { label: "Active Requests", value: stats.activeRequests },
          { label: "Ongoing Projects", value: stats.ongoingProjects },
          { label: "Completed Devices", value: stats.completedDevices },
        ].map((item) => (
          <div key={item.label} className="p-4 bg-blue-100 rounded-lg shadow">
            <p className="text-sm text-gray-700">{item.label}</p>
            <p className="text-2xl font-semibold text-blue-800">{item.value}</p>
          </div>
        ))}
      </div>

      {/* Notifications */}
      <div>
        <h2 className="text-lg font-semibold mb-2">Notifications</h2>
        <ul className="space-y-2">
          {notifications.map((note) => (
            <li key={note.id} className="bg-gray-100 p-3 rounded shadow-sm">
              <p>{note.message}</p>
              <p className="text-xs text-gray-500">{note.time}</p>
            </li>
          ))}
        </ul>
      </div>

      {/* Quick Actions */}
      <div className="flex gap-4 mt-4">
        <button className="bg-blue-600 text-white px-4 py-2 rounded shadow">
          Create New Request
        </button>
        <button className="bg-green-600 text-white px-4 py-2 rounded shadow">
          Check Messages
        </button>
      </div>
    </div>
  );
};

export default Overview;
