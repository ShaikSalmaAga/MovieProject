import React from "react";

function ProfileCard({ name, avatar, isAdd, onClick }) {
  return (
    <div className="profile-card" onClick={onClick}>
      <div className={`avatar ${isAdd ? "add-avatar" : ""}`}>
        {isAdd ? <span className="plus">+</span> : <img src={avatar} alt={name} />}
      </div>
      <p>{name}</p>
    </div>
  );
}

export default ProfileCard;
