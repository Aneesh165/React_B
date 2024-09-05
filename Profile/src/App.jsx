import React from "react";
import ProfileCard from "./Components/card";

const App = () => {
  const user = [
    {
      name: "John Doe",
      age: "23",
      profilePicture:
        "https://static.vecteezy.com/system/resources/thumbnails/002/002/403/small/man-with-beard-avatar-character-isolated-icon-free-vector.jpg",
      bio: "A passionate web developer",
    },
    {
      name: "John ",
      age: "21",
      profilePicture:
        "https://static.vecteezy.com/system/resources/thumbnails/002/002/403/small/man-with-beard-avatar-character-isolated-icon-free-vector.jpg",
      bio: "A passionate web developer",
    },
    {
      name: "Doe",
      age: "22",
      profilePicture:
        "https://static.vecteezy.com/system/resources/thumbnails/002/002/403/small/man-with-beard-avatar-character-isolated-icon-free-vector.jpg",
      bio: "A passionate web developer",
    },
  ];
  return (
    <div className="listing">
      {user.map((user, index) => (
        <ProfileCard
          name={user.name}
          profilePicture={user.profilePicture}
          age={user.age}
          bio={user.bio}
        />
      ))}
    </div>
  );
};

export default App;
