import React from "react";
import "./style.css";

function ProfileCard({ name, age, profilePicture, bio }) {
  return (
    <div className="card_body">
      <div>
        <img src={profilePicture} alt={name} />
      </div>
      <div className="black_div">
        <p>{name}</p>
        <p>{age}</p>
        <p>{bio}</p>
      </div>
    </div>
  );
}

export default ProfileCard;
