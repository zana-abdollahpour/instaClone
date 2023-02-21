/* eslint-disable @next/next/no-img-element */
import React from "react";
import {
  EllipsisHorizontalIcon,
  HeartIcon,
  ChatBubbleOvalLeftIcon,
  BookmarkIcon,
} from "@heroicons/react/24/outline";

export default function Post(props) {
  return (
    <div className="bg-white my-6 border rounded-md">
      {/* Post Header */}

      <div className="flex items-center p-5">
        <img
          className="h-12 rounded-full object-cover brder p-[2px] mr-3"
          src={props.userImg}
          alt={props.username + "'s profile image"}
        />
        <span className="block font-bold flex-1">{props.username}</span>
        <EllipsisHorizontalIcon className="h-5" />
      </div>

      {/* Post Img */}
      <img
        className="object-cover w-full"
        src={props.postImg}
        alt={props.postImg + "'s post image"}
      />

      {/* Post Buttons */}
      <div className="flex justify-between px-4 pt-4">
        <div className="flex space-x-4">
          <HeartIcon className="post--btn" />
          <ChatBubbleOvalLeftIcon className="post--btn" />
        </div>
        <BookmarkIcon className="post--btn" />
      </div>
    </div>
  );
}
