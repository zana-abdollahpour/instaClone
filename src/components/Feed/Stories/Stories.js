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
    <div className="flex space-x-2 p-6 bg-white mt-8 border-gray-300 border rounded-sm scrollbar-none overflow-x-auto">
      {userStories.map((user) => (
        <Story key={user.id} username={user.username} img={user.img} />
      ))}
    </div>
  );
}
