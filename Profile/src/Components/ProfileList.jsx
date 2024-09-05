import React from 'react';
import ProfileCard from './card';

const ProfileList = () => {
  return (
    <div>
      <ProfileCard
        name="John Doe"
        age={23}
        profilePicture="https://static.vecteezy.com/system/resources/thumbnails/002/002/403/small/man-with-beard-avatar-character-isolated-icon-free-vector.jpg"
        bio="A passionate web developer"
      />
    </div>
  );
};

export default ProfileList;