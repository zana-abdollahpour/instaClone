/* eslint-disable @next/next/no-img-element */
import React from "react";
import { PlusIcon } from "@heroicons/react/24/solid";

export default function Story(props) {
  return (
    <div className="relative cursor-pointer group">
      <img
        src={props.img}
        alt={props.username}
        className="group-hover:scale-105 transition-transform duration-200 rounded-full w-14 h-14 p-[2px] border-2 ease-out border-red-600"
      />
      {props.isUser && (
        <PlusIcon className="absolute w-6 h-6 text-white top-4 left-4 text-opacity-70" />
      )}
      <span className="block text-xs text-center truncate w-14">
        {props.username}
      </span>
    </div>
  );
}
