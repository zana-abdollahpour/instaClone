import React from "react";
import Image from "next/image";
import { PlusCircleIcon } from "@heroicons/react/24/outline";
import { HomeIcon } from "@heroicons/react/24/solid";

import userPhoto from "../../assets/img/users/user-zana.jpg";

export default function HeaderUser() {
  return (
    <div className="flex items-center space-x-4">
      <HomeIcon className="hidden h-6 transition-transform duration-200 ease-in md:inline-flex curpointer hover:scale-110" />
      <PlusCircleIcon className="h-6 transition-transform duration-200 ease-in curpointer hover:scale-110" />
      <Image
        src={userPhoto}
        alt="Zana's photo"
        className="w-10 rounded-full cursor-pointer"
      />
    </div>
  );
}
