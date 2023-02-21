/* eslint-disable @next/next/no-img-element */
import React from "react";

export default function Story(props) {
  return (
    <div>
      <img src={props.img} alt={props.username} className="w-12 h-12" />
      <p>{props.username}</p>
    </div>
  );
}
