/* eslint-disable @next/next/no-img-element */
import React from "react";
import { PlusCircleIcon } from "@heroicons/react/24/outline";
import { HomeIcon } from "@heroicons/react/24/solid";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRecoilState } from "recoil";
import { modalState } from "../../../atom/modalAtom";

// import userPhoto from "../../assets/img/users/user-zana.jpg";

export default function HeaderUser() {
  const { data: session } = useSession();
  const [open, setOpen] = useRecoilState(modalState);

  return (
    <div className="flex items-center space-x-4">
      <HomeIcon className="hidden h-6 transition-transform duration-200 ease-in md:inline-flex curpointer hover:scale-110" />
      {session ? (
        <>
          <PlusCircleIcon
            onClick={() => {
              setOpen(true);
            }}
            className="h-6 transition-transform duration-200 ease-in curpointer hover:scale-110"
          />
          <img
            onClick={signOut}
            src={session.user.image}
            alt="User's photo"
            className="w-10 h-10 rounded-full cursor-pointer"
          />
        </>
      ) : (
        <button onClick={signIn}>Sign in</button>
      )}
    </div>
  );
}
