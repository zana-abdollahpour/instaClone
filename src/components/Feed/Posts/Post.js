/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import {
  EllipsisHorizontalIcon,
  HeartIcon,
  ChatBubbleOvalLeftIcon,
  BookmarkIcon,
  FaceSmileIcon,
} from "@heroicons/react/24/outline";
import { useSession } from "next-auth/react";
import {
  addDoc,
  collection,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
} from "firebase/firestore";
import Moment from "react-moment";

// import userPhoto from "../../../assets/img/users/user-zana.jpg";
import { db } from "../../../../firebase";

export default function Post(props) {
  const { data: session } = useSession();
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      query(
        collection(db, "posts", props.id, "comments"),
        orderBy("timestamp", "desc")
      ),
      (snapshot) => {
        setComments(snapshot.docs);
      }
    );
  }, [db, props.id]);

  async function sendComment(e) {
    e.preventDefault();
    const commentToSend = comment;
    setComment("");
    await addDoc(collection(db, "posts", props.id, "comments"), {
      comment: commentToSend,
      username: session.user.username,
      userImage: session.user.image,
      timestamp: serverTimestamp(),
    });
  }

  return (
    <div className="my-6 bg-white border rounded-md">
      {/* Post Header */}
      <div className="flex items-center p-5">
        <img
          className="h-12 w-12 rounded-full object-cover brder p-[2px] mr-3"
          src={session.user.image}
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
      {session && (
        <div className="flex justify-between px-4 pt-4">
          <div className="flex space-x-4">
            <HeartIcon className="post--btn" />
            <ChatBubbleOvalLeftIcon className="post--btn" />
          </div>
          <BookmarkIcon className="post--btn" />
        </div>
      )}

      {/* Post Comments */}
      <p className="p-5 truncate ">
        <span className="mr-2 font-bold">{props.username}</span>
        {props.caption}
      </p>
      {comments.length > 0 && (
        <div className="mx-10 overflow-y-scroll max-h-24 scrollbar-none">
          {comments.map((comment) => (
            <div className="flex items-center mb-2 space-x-2 " key={props.id}>
              <img
                className="object-cover rounded-full h-7 w-7"
                src={comment.data().userImage}
                alt="user's image"
              />
              <span className="block font-semibold ">
                {comment.data().username}
              </span>
              <p className="flex-1 truncate">{comment.data().comment}</p>
              <Moment fromNow>{comment.data().timestamp?.toDate()}</Moment>
            </div>
          ))}
        </div>
      )}
      {session && (
        <form className="flex items-center p-4">
          <FaceSmileIcon className="h-7" />
          <input
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="flex-1 border-none focus:ring-0"
            type="text"
            placeholder="add your comment..."
          />
          <button
            type="submit"
            onClick={sendComment}
            disabled={!comment.trim()}
            className="font-bold text-blue-400 disabled:text-blue-200"
          >
            Post
          </button>
        </form>
      )}
    </div>
  );
}
