import React, { useEffect, useState } from "react";
import minifaker from "minifaker";
import "minifaker/locales/en";

import Story from "./Story";

export default function Stories() {
  const [userStories, setUserStories] = useState([]);
  useEffect(() => {
    const userStories = minifaker.array(24, (i) => ({
      username: minifaker.username({ locale: "en" }).toLowerCase(),
      img: `https://i.pravatar.cc/150?img=${Math.ceil(Math.random() * 70)}`,
      id: i,
    }));
    setUserStories(userStories);
    console.log(userStories);
  }, []);

  return (
    <div>
      {userStories.map((user) => (
        <Story key={user.id} username={user.username} img={user.img} />
      ))}
    </div>
  );
}
