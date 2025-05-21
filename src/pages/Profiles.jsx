import React from "react";
import ProfileCard from "../components/ProfileCard";
import "../components/css/Profiles.css"; // ✅ Corrected path

const avatars = [
  { name: "Salma", avatar: "https://i.ibb.co/t4bsDsm/blue.png" },
  { name: "Home", avatar: "https://i.ibb.co/p01nZwr/red.png" },
  { name: "Soskslks", avatar: "https://i.ibb.co/ZMBQg3v/green.png" },
  { name: "Children", avatar: "https://i.ibb.co/P4N5xMX/kids.png" },
];

function Profiles() {
  return (
    <div className="profiles-container">
      <h1>Who's watching?</h1>
      <div className="profiles-grid">
        {avatars.map((profile) => (
          <ProfileCard
            key={profile.name}
            name={profile.name}
            avatar={profile.avatar}
            onClick={() => alert(`Welcome ${profile.name}`)}
          />
        ))}
        <ProfileCard
          name="Add Profile"
          isAdd
          onClick={() => alert("Add new profile")}
        />
      </div>
      <button className="manage-btn">Manage Profiles</button>
    </div>
  );
}

export default Profiles;
