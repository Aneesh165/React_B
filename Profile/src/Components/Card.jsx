import React from 'react';

function ProfileCard ({ name, age, profilePicture, bio })  {
  return (
    <div>
      <img src={profilePicture}/>
      <div>
        <h2>{name}</h2>
        <p>Age : {age}</p>
        <p>{bio}</p>
      </div>
    </div>
  );
};

export default ProfileCard;