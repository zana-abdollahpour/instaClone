/* eslint-disable @next/next/no-img-element */
import React from "react";
import {
  EllipsisHorizontalIcon,
  HeartIcon,
  ChatBubbleOvalLeftIcon,
  BookmarkIcon,
  FaceSmileIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";

import userPhoto from "../../../assets/img/users/user-zana.jpg";

export default function Post(props) {
  return (
    <div className="my-6 bg-white border rounded-md">
      {/* Post Header */}
      <div className="flex items-center p-5">
        <Image
          className="h-12 w-12 rounded-full object-cover brder p-[2px] mr-3"
          src={userPhoto}
          alt={props.username + "'s profile image"}
        />
        <span className="flex-1 block font-bold">{props.username}</span>
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

      {/* Post Comments */}
      <p className="p-5 truncate ">
        <span className="mr-2 font-bold">{props.username}</span>
        {props.caption}
      </p>
      <form className="flex items-center p-4">
        <FaceSmileIcon className="h-7" />
        <input
          className="flex-1 border-none focus:ring-0"
          type="text"
          placeholder="add your comment..."
        />
        <button className="font-bold text-blue-400">Post</button>
      </form>
    </div>
  );
}
