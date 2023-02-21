/* eslint-disable @next/next/no-img-element */
import React from "react";

export default function Story(props) {
  return (
    <div>
      <img
        src={props.img}
        alt={props.username}
        className="hover:scale-105 transition-transform duration-200 rounded-full w-14 h-14 p-[2px] border-2 ease-out border-red-600"
      />
      <span className="text-xs w-14 truncate block text-center">
        {props.username}
      </span>
    </div>
  );
}
