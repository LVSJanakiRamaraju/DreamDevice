import { useState } from "react";

const ProfileManagement = () => {
  const [profile, setProfile] = useState({
    name: "Client Name",
    email: "client@example.com",
    phone: "9876543210",
    address: "Hyderabad, Telangana, India",
  });

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleUpdate = () => {
    console.log("Updated profile:", profile);
    alert("Profile updated successfully!");
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Profile Management</h2>
      <div className="space-y-4">
        <input
          type="text"
          name="name"
          value={profile.name}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          placeholder="Full Name"
        />
        <input
          type="email"
          name="email"
          value={profile.email}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          placeholder="Email"
        />
        <input
          type="text"
          name="phone"
          value={profile.phone}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          placeholder="Phone Number"
        />
        <input
          type="text"
          name="address"
          value={profile.address}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          placeholder="Address"
        />
        <button
          onClick={handleUpdate}
          className="bg-blue-600 text-white px-4 py-2 rounded shadow"
        >
          Update Profile
        </button>
      </div>
    </div>
  );
};

export default ProfileManagement;
