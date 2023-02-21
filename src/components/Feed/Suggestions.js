/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import minifaker from "minifaker";
import "minifaker/locales/en";

export default function Suggestions() {
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const suggestions = minifaker.array(5, (i) => ({
      username: minifaker.username({ locale: "en" }).toLowerCase(),
      jobTitle: minifaker.jobTitle(),
      img: `https://i.pravatar.cc/150?img=${Math.ceil(Math.random() * 70)}`,
      id: i,
    }));
    setSuggestions(suggestions);
  }, []);

  return (
    <div className="mt-4 ml-10">
      <div className="flex justify-between mb-5 text-sm">
        <h3 className="font-bold text-grey-400 ">suggestions for you</h3>
        <button className="font-semibold text-gray-600">See All</button>
      </div>
      {suggestions.map((suggestion) => (
        <div
          key={suggestion.id}
          className="flex items-center justify-between mt-3"
        >
          <img
            className="h-10 rounded-full border p-[2px]"
            src={`https://i.pravatar.cc/150?img=${Math.ceil(
              Math.random() * 70
            )}`}
            alt=""
          />
          <div className="flex-1 ml-4">
            <h2 className="text-sm font-semibold">{suggestion.username}</h2>
            <h3 className="w-56 text-sm text-gray-400 truncate">
              {suggestion.jobTitle}
            </h3>
          </div>
          <button className="font-semibold text-blue-400">Follow</button>
        </div>
      ))}
    </div>
  );
}
