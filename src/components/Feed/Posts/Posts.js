import React from "react";
import Post from "./Post";

export default function Posts() {
  const posts = [
    {
      id: "1",
      username: "someName",
      userImg: "../../../assets/img/users/user-zana.jpg",
      postImg:
        "https://images.unsplash.com/photo-1615852290963-4843eebb524a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      caption: "Beautiful Mountains of Kurdistan",
    },
    {
      id: "2",
      username: "someOtherName",
      userImg: "../../../assets/img/users/user-zana.jpg",
      postImg:
        "https://images.unsplash.com/photo-1607802347849-e0224ff66e47?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      caption: "Rawanduz, Kurdistan",
    },
  ];
  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.username}
          userImg={post.userImg}
          postImg={post.postImg}
          caption={post.caption}
        />
      ))}
    </div>
  );
}
