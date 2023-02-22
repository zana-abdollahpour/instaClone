/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";
import { useSession, signOut } from "next-auth/react";

// import userPhoto from "../../assets/img/users/user-zana.jpg";

export default function MiniProfile() {
  const { data: session } = useSession();
  return (
    <div className="flex items-center justify-between ml-10 mt-14">
      <Image
        className="h-16 w-16 rounded-full border p-[2px]"
        src={session?.user.image}
        alt="Current user's photo"
      />
      <div className="flex-1 ml-4">
        <h2 className="font-bold ">{session?.user.username}</h2>
        <h3 className="text-sm text-gray-400">Welcome to InstaClone!</h3>
      </div>
      <button onClick={signOut} className="text-sm font-semibold text-blue-400">
        Sign Out
      </button>
    </div>
  );
}
